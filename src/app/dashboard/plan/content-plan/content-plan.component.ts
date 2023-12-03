import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Plan} from "../../../shared/models/plan.model";
import {GetLearningPlanModel} from "../../../shared/store/plan/getLearningPlan/getLearningPlan.model";
import {getUntPlanAction} from "../../../shared/store/plan/getUntPlan/getUntPlan.action";
import {getUntPlanSelector} from "../../../shared/store/plan/getUntPlan/getUntPlan.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getLearningPlanAction} from "../../../shared/store/plan/getLearningPlan/getLearningPlan.action";
import {getLearningPlanSelector} from "../../../shared/store/plan/getLearningPlan/getLearningPlan.selector";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {Subject} from "../../../shared/models/subject.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faCheck, faCheckCircle, faCircleCheck, faCoins, faXmark} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-content-plan',
  templateUrl: './content-plan.component.html',
  styleUrls: ['./content-plan.component.scss']
})
export class ContentPlanComponent implements OnInit,OnDestroy{
  //Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};
  //Injection End

  //Data
  activeSubjectId:number|null = null;
  activeSubject:Plan|null = null;
  //@ts-ignore
  plans:GetLearningPlanModel;
  subjects:Subject[] = [];
  //Data



  ngOnInit(): void {
    this.getContentPlan();
    this.getSubjects();
  }

  getContentPlan(){
    this._store.dispatch(getLearningPlanAction());
    this._store.select(getLearningPlanSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.plans = item.data;
        }
      }
    )
  }

  selectSubject(event:number|null){
    if(event){
      this.activeSubjectId = event;
      this.activeSubject = this.plans.plans.find(item=>item.tag == event.toString())??null;
    }
    else{
      this.activeSubjectId = null;
      this.activeSubject = null;
    }
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    });
  }

  getSubjectByPlan(subject_id:string){
    // @ts-ignore
    subject_id = +subject_id;
    // @ts-ignore
    return this.subjects.find(item=>item.id == subject_id);
  }

  getStatByPlan(subject_id:string){
    // @ts-ignore
    subject_id = +subject_id;
    // @ts-ignore
    return this.plans.stat.find(item=>item.subject_id == subject_id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
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
        items: 1
      },
      740: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400:{
        items:4
      }
    },
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly Number = Number;
  protected readonly parseInt = parseInt;
  protected readonly faCoins = faCoins;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCheck = faCheck;
  protected readonly faXmark = faXmark;
}
