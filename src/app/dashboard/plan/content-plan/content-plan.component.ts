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
import {faCheckCircle, faCoins} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";

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

  //Injection End

  //Data
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

  protected readonly ImageHelper = ImageHelper;
  protected readonly Number = Number;
  protected readonly parseInt = parseInt;
  protected readonly faCoins = faCoins;
  protected readonly faCheckCircle = faCheckCircle;
}
