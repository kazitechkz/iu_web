import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {resultByAttemptIdAction} from "../../../shared/store/stat/resultByAttemptId/resultByAttemptId.action";
import {
  getSubTournamentRivalsSelector
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {resultByAttemptIdSelector} from "../../../shared/store/stat/resultByAttemptId/resultByAttemptId.selector";
import {ResultByAttemptIdModel} from "../../../shared/store/stat/resultByAttemptId/resultByAttemptId.action.model";
import * as moment from 'moment';
import {CountdownConfig} from "ngx-countdown";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faChartBar, faCheckCircle, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
@Component({
  selector: 'app-result-by-attempt-id',
  templateUrl: './result-by-attempt-id.component.html',
  styleUrls: ['./result-by-attempt-id.component.scss']
})
export class ResultByAttemptIdComponent implements OnInit,OnDestroy{
  //Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);

  //Injection End
  //Data
  //@ts-ignore
  resultByAttempt:ResultByAttemptIdModel;
  timeConfig:CountdownConfig = {
    // @ts-ignore
    leftTime:180,
    demand:true
  }
  //Data


  ngOnInit(): void {
    this.subscription =  this._route.params.subscribe(params => {
      let routeId = params["id"];
      this.getResultByAttemptId(routeId);
    })
  }



  getResultByAttemptId(id:number){
    this._store.dispatch(resultByAttemptIdAction({requestData:id}));
    this._store.select(resultByAttemptIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.resultByAttempt = item.data;
          let leftTime = (item.data.attempt.time - item.data.attempt.time_left)/1000;
          this.timeConfig.leftTime = leftTime;
        }
      }
    )
  }

  getSubjectResult(subject_id:number){
    return this.resultByAttempt.subject_result.find(item=>item.subject_id == subject_id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faPencilAlt = faPencilAlt;
  protected readonly faChartBar = faChartBar;
  protected readonly faCheckCircle = faCheckCircle;
}
