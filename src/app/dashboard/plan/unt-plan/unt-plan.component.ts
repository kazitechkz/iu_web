import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";
import {
  faClock,
  faBook,
  faLanguage,
  faCircleCheck,
  faForwardFast,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import {resultByAttemptIdAction} from "../../../shared/store/stat/resultByAttemptId/resultByAttemptId.action";
import {getUntPlanAction} from "../../../shared/store/plan/getUntPlan/getUntPlan.action";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {resultByAttemptIdSelector} from "../../../shared/store/stat/resultByAttemptId/resultByAttemptId.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getUntPlanSelector} from "../../../shared/store/plan/getUntPlan/getUntPlan.selector";
import {Plan} from "../../../shared/models/plan.model";

@Component({
  selector: 'app-unt-plan',
  templateUrl: './unt-plan.component.html',
  styleUrls: ['./unt-plan.component.scss']
})
export class UntPlanComponent implements OnInit,OnDestroy{

  //Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End

  //Data
    //@ts-ignore
    plans:Plan[];
    //@ts-ignore
    public selectedPlanId:number|null;
  //Data
  protected readonly RoutesName = RoutesName;
  public faLanguage = faLanguage;

  protected readonly faCheckCircle = faCheckCircle;


  ngOnInit(): void {
    this.getUntPlan();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  selectPlan(plan_id:number){
    this.selectedPlanId = plan_id;
  }
  getUntPlan(){
    this._store.dispatch(getUntPlanAction());
    this._store.select(getUntPlanSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
        item => {
          if(item.data){
            this.plans = item.data;
          }
        }
    )
  }
}
