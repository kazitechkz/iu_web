import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {ColorConstants} from "../../../core/constants/color.constants";
import {
  faClock,
  faBook,
  faLanguage,
  faCircleCheck,
  faForwardFast,
  faCheck,
  faWindowClose, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {loginAction} from "../../../shared/store/auth/login/login.action";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getLoginState} from "../../../shared/store/auth/login/login.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
// @ts-ignore
import {Subject} from "../../models/subject.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {Select2Data} from "ng-select2-component";
import {RoutesName} from "../../../core/constants/routes.constants";
import {CreateAttemptRequest} from "../../../shared/store/attempt/createAttempt/createAttempt.request";
import {createAttemptAction} from "../../../shared/store/attempt/createAttempt/createAttempt.action";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ModalUntTrainerComponent} from "../../../shared/components/modal-unt-trainer/modal-unt-trainer.component";
import {checkPlanUNTAction} from "../../../shared/store/plan/checkPlanUNT/checkPlanUNT.action";
import {checkPlanUNTSelector} from "../../../shared/store/plan/checkPlanUNT/checkPlanUNT.selector";
@Component({
  selector: 'app-pass-unt',
  templateUrl: './pass-unt.component.html',
  styleUrls: ['./pass-unt.component.scss']
})
export class PassUntComponent implements OnInit{
  //@ts-ignore
  @ViewChild('modalBuyUNT', { static: false }) modalBuyUNT: ModalUntTrainerComponent;
  faClock = faClock;
  faBook = faBook;
  faLanguage = faLanguage;
  faForwardFast = faForwardFast;
  protected readonly ColorConstants = ColorConstants;
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  complusory_subjects:Subject[] = [];
  subjects:Subject[] = [];
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number[] = [];
  hasSubscription:boolean = false;
  locale_id:number = 1;
  public translate = inject(GlobalTranslateService);
  ngOnInit(): void {
    this.checkSubscription();
    this.getSubjects();
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.complusory_subjects = item.data.filter(item=>item.is_compulsory);
        this.subjects = item.data.filter(item=>!item.is_compulsory);
      }
    })
  }

  checkSubscription(){
    this._store.dispatch(checkPlanUNTAction());
    this._store.select(checkPlanUNTSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.hasSubscription = item.data;
      }
    })
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
  //@ts-ignore

  checkIfUserHasPermission(){
    if(!this.hasSubscription){
      this.modalBuyUNT.openDialog();
    }
    else {
      this.createAttempt(true);
    }
  }

  createAttempt(result:boolean){
    if (this.chosenSubject.length == 2 && result){
      let request = {subjects:this.chosenSubject, locale_id:this.locale_id, attempt_type_id:1,} as CreateAttemptRequest;
      this._store.dispatch(createAttemptAction({requestData:request}));
    }
  }




  chooseSubject(id:number){
    const index = this.chosenSubject.indexOf(id); // Check if target exists in the array
    if (index === -1) {
      if(this.chosenSubject.length >=2){
        this.chosenSubject.splice(0, 1);
      }
      this.chosenSubject.push(id);
    } else {
      // If target exists, remove it from the array
      this.chosenSubject.splice(index, 1);
    }
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
  protected readonly faCheck = faCheck;
  protected readonly faWindowClose = faWindowClose;
  protected readonly faXmark = faXmark;
}
