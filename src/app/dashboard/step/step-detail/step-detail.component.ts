import {Component, DestroyRef, inject, OnInit, ViewContainerRef} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {StepModel, Steps} from "../../../shared/models/step.model";
import {stepDetailAction} from "../../../shared/store/step/detail/stepDetail.action";
import {getStepDetailState} from "../../../shared/store/step/detail/stepDetail.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {ColorConstants} from "../../../core/constants/color.constants";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
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

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})
export class StepDetailComponent implements OnInit {

  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  public steps?: Steps[] | null;
  subjects:Subject[] = [];
  dialog = inject(NgxSmartModalService)
  public subSteps: SubStepModel[] | null = []

  ngOnInit(): void {
    this.getStepDetail();
    this.getSubjects();
    this.onScrollX()
  }

  onScrollX() {
    let scrollX = document.getElementById('scroll-x')
    // @ts-ignore
    scrollX.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
        // @ts-ignore
        scrollX.scrollLeft += 100;
      }
      else {
        // @ts-ignore
        scrollX.scrollLeft -= 100;
      }
    });
  }

  openDialog(id: string) {
    this._store.dispatch(subStepAction({requestData: parseInt(id)}))
    this._store.select(getSubStepState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.subSteps = item.data
    })
    this.dialog.getModal(id).open()
  }

  getStepDetail() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(stepDetailAction({ requestData: params['id'] }))
      this._store.select(getStepDetailState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.steps = item.data
        console.log(item.data)
      })
    })
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      if(item.data){
        this.subjects = item.data;
      }
    })
  }

  //@ts-ignore
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":false,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  };

  protected readonly ImageHelper = ImageHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly Array = Array;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
  protected readonly console = console;
  protected readonly StrHelper = StrHelper;
}
