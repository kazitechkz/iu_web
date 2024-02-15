import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {NgxSmartModalService} from "ngx-smart-modal";
import {getCareerQuizSelector} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getCareerQuizGroupListSelector
} from "../../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.selector";
import {CareerQuizGroup} from "../../../shared/models/careerQuizGroup.model";
import {getCareerQuizAction} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.action";
import {
  getCareerQuizGroupListAction
} from "../../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.action";
import {
  faCartShopping,
  faCheck,
  faCheckCircle,
  faChevronRight,
  faCircleCheck,
  faCoins, faLockOpen,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {OwlOptions} from "ngx-owl-carousel-o";
import {PayCareerRequest} from "../../../shared/store/career/payCareer/payCareer.request";
import {payCareerAction} from "../../../shared/store/career/payCareer/payCareer.action";
import {payCareerSelector} from "../../../shared/store/career/payCareer/payCareer.selector";

@Component({
  selector: 'app-career-plan',
  templateUrl: './career-plan.component.html',
  styleUrls: ['./career-plan.component.scss']
})
export class CareerPlanComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  dialog = inject(NgxSmartModalService);
  //Injection
  //Data
  careerQuizGroups:CareerQuizGroup[]|null = null;
  purchased:number[]|null = [];
  activeQuizGroup:CareerQuizGroup|null = null;
  activeQuizNumber:number|null = null;
  isGroupBlocked:number[] = [];
  isCareerQuizBlocked:number[] = [];
  payCareerRequest: PayCareerRequest = {career_group_id:null, career_quiz_id:null};
  //Data

  constructor() {
    this._store.select(getCareerQuizGroupListSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.purchased = item.data.purchased;
        this.careerQuizGroups = item.data.group;
        this.activeQuizGroup = item.data.group[0];
      }
    })
    this._store.select(payCareerSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        if(item.data.pg_redirect_url){
          window.location.href = item.data.pg_redirect_url;
        }
      }
      else{
        this.isGroupBlocked = [];
        this.isCareerQuizBlocked = [];
      }
    })
  }

  ngOnInit(): void {
    this.getCareerQuizGroupList();
  }

  getCareerQuizGroupList(){
    this._store.dispatch(getCareerQuizGroupListAction());
  }

  setActiveQuizGroup(item:number){
    if(this.careerQuizGroups){
      if(this.careerQuizGroups[item]){
        this.activeQuizNumber = item;
       this.activeQuizGroup = this.careerQuizGroups[item];
      }
    }
  }
  payForCareerGroup(groupId:number){
    if(!this.isGroupBlocked.includes(groupId)){
      this.isGroupBlocked.push(groupId);
      this._store.dispatch(payCareerAction({requestData:{career_group_id:groupId} as PayCareerRequest}))
    }
  }
  payForCareerQuiz(quiz_id:number){
    if(!this.isCareerQuizBlocked.includes(quiz_id)){
      this.isCareerQuizBlocked.push(quiz_id);
      this._store.dispatch(payCareerAction({requestData:{career_quiz_id:quiz_id} as PayCareerRequest}))
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 5,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: [],
    items: 1,
  }

  protected readonly faChevronRight = faChevronRight;
  protected readonly faCoins = faCoins;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faCheck = faCheck;
  protected readonly Image = Image;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faXmark = faXmark;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faLockOpen = faLockOpen;
}
