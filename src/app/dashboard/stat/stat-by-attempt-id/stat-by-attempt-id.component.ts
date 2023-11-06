import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {StatByAttemptIdModel} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.action.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {statByAttemptIdAction} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.action";
import {statByAttemptIdSelector} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faChartBar, faCoins} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-stat-by-attempt-id',
  templateUrl: './stat-by-attempt-id.component.html',
  styleUrls: ['./stat-by-attempt-id.component.scss']
})
export class StatByAttemptIdComponent implements OnInit,OnDestroy{
//Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End
  //Data
  //@ts-ignore
  statByAttempt:StatByAttemptIdModel;
  //Data

  ngOnInit(): void {
    this.subscription =  this._route.params.subscribe(params => {
      let routeId = params["id"];
      this.getStatByAttemptId(routeId);
    })
  }

  getStatByAttemptId(id:number){
    this._store.dispatch(statByAttemptIdAction({requestData:id}));
    this._store.select(statByAttemptIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.statByAttempt = item.data;
        }
      }
    )
  }

  getSubjectResult(subject_id:number){
    return this.statByAttempt.stat_by_attempt.filter(item=>item.subject_id == subject_id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly faChartBar = faChartBar;
  protected readonly faCoins = faCoins;
  protected readonly RoutesName = RoutesName;
}
