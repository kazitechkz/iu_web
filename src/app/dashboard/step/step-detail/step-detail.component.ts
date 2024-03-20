import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {StepModel, Steps} from "../../../shared/models/step.model";
import {stepDetailAction} from "../../../shared/store/step/detail/stepDetail.action";
import {getStepDetailState} from "../../../shared/store/step/detail/stepDetail.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {ColorConstants} from "../../../core/constants/color.constants";
import {faCheck, faCircleCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {Subject} from "../../../shared/models/subject.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {NgxSmartModalService} from "ngx-smart-modal";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {subStepAction} from "../../../shared/store/step/subStep/subStep.action";
import {getSubStepState} from "../../../shared/store/step/subStep/subStep.selector";
import {StrHelper} from "../../../core/helpers/str.helper";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {factAction} from "../../../shared/store/fact/fact.action";
import {getFactStateSelector} from "../../../shared/store/fact/fact.selector";
import {FactModel} from "../../../shared/models/fact.model";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})
export class StepDetailComponent implements OnInit {
  //@ts-ignore
  @ViewChild('modalBuyContent', { static: false }) modalBuyContent: ModalContentOfferComponent;
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  destroyRef = inject(DestroyRef);
  public steps?: Steps[] | null;
  subjects:Subject[] = [];
  //@ts-ignore
  fact:FactModel;
  dialog = inject(NgxSmartModalService)
  public subSteps: SubStepModel[] | null = []
  chosenSubject:number[] = [];
  public localeID: number = 1

  ngOnInit(): void {
    this.getStepDetail()
    this.getSubjects()
    this.getFacts()
    // this.onScrollX()
  }

  // onScrollX() {
  //   let scrollX = document.getElementById('scroll-x')
  //   // @ts-ignore
  //   scrollX.addEventListener("wheel", function (e) {
  //     if (e.deltaY > 0) {
  //       // @ts-ignore
  //       scrollX.scrollLeft += 100;
  //     }
  //     else {
  //       // @ts-ignore
  //       scrollX.scrollLeft -= 100;
  //     }
  //   });
  // }

  openDialog(id: string) {
    this._store.dispatch(subStepAction({requestData: parseInt(id)}))
    this._store.select(getSubStepState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.subSteps = item.data
    })
    this.dialog.getModal(id).open()
  }

  getStepDetail() {
    this.resetScroll()
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(stepDetailAction({ requestData: params['id'] }))
      this._store.select(getStepDetailState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.steps = item.data
      })
    })
  }
  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      if(item.data){
        const elementsToRemove = [3, 13, 15];
        this.subjects = item.data.filter(element => !elementsToRemove.includes(element.id));
      }
    })
  }
  changeLang(event: any) {
    this.localeID = event ? 1 : 2
  }
  openBuyContentDialog(subject: Subject | null) {
    this.dialog.closeLatestModal()
    this.modalBuyContent.openDialog(subject)
  }
  getFacts() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(factAction({subjectId: params['id']}))
      this._store.select(getFactStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.fact = item.data
        } else {
          //@ts-ignore
          this.fact = {
            subject: {
              title_kk: '',
              title_ru: '',
              id: 0,
              image_url: 0,
              is_compulsory: false,
              max_questions_quantity: 0,
              enable: false,
              questions_step: 0,
              created_at: '',
              updated_at: '',
              deleted_at: '',
              image: null
            },
            text_kk: '',
            text_ru: '',
            subjectId: 0
          }
        }
      })
    })
  }

  getStepDetailBySubjectID(subjectID: number) {
    this.resetScroll()
    this._router.navigateByUrl('/dashboard/step/' + subjectID).then(r  => null)
  }
  resetScroll() {
    const scrollableDiv = document.getElementById('scrollableDiv')
    if (scrollableDiv) {
      scrollableDiv.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
  chooseSubject(id:number){
    this.resetScroll()
    const index = this.chosenSubject.indexOf(id); // Check if target exists in the array
    if (index === -1) {
      if(this.chosenSubject.length >= 1){
        this.chosenSubject.splice(0, 1);
      }
      this.chosenSubject.push(id);
      this._router.navigateByUrl('/dashboard/step/' + id).then(r => null)
    } else {
      // If target exists, remove it from the array
      this.chosenSubject.splice(index, 1);
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav:false,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly Array = Array;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
  protected readonly console = console;
  protected readonly StrHelper = StrHelper;
  protected readonly faXmark = faXmark;
  protected readonly faCheck = faCheck;
}
