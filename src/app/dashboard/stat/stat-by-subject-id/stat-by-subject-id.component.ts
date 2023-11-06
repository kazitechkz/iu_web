import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {statBySubjectIdAction} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.action";
import {statBySubjectIdSelector} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {StatBySubjectIdModel} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.action.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faCoins} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stat-by-subject-id',
  templateUrl: './stat-by-subject-id.component.html',
  styleUrls: ['./stat-by-subject-id.component.scss']
})
export class StatBySubjectIdComponent implements OnInit,OnDestroy{
//Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End
  //Data
  //@ts-ignore
  statBySubject:StatBySubjectIdModel;
  //Data

  ngOnInit(): void {
    this.subscription =  this._route.params.subscribe(params => {
      let routeId = params["id"];
      this.getStatByAttemptId(routeId);
    })
  }

  getStatByAttemptId(id:number){
    this._store.dispatch(statBySubjectIdAction({requestData:id}));
    this._store.select(statBySubjectIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.statBySubject = item.data;
        }
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly faCoins = faCoins;
}
