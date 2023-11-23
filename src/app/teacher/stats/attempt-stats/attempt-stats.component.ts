import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {StatExamByIdAction} from "../../../shared/store/teacher/stats/stat-by-attempt.action";
import {statExamByIdStateSelector} from "../../../shared/store/teacher/stats/stat-by-attempt.selector";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";

@Component({
  selector: 'app-attempt-stats',
  templateUrl: './attempt-stats.component.html',
  styleUrls: ['./attempt-stats.component.scss']
})
export class AttemptStatsComponent implements OnInit {
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef: DestroyRef = inject(DestroyRef);
  //@ts-ignore
  statByAttempt: StatByAttemptIdModel;

  ngOnInit(): void {
    this.getStatByAttemptId()
  }

  getStatByAttemptId() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(StatExamByIdAction({attempt_id: params['attempt_id'], user_id: params['user_id']}));
      this._store.select(statExamByIdStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
        item => {
          if (item.data) {
            console.log(item.data)
            this.statByAttempt = item.data;
          }
        }
      )
    })
  }

  getSubjectResult(subject_id: number) {
    return this.statByAttempt.stat_by_attempt.filter((item: { subject_id: number; }) => item.subject_id == subject_id);
  }

  protected readonly faCoins = faCoins;
  protected readonly ImageHelper = ImageHelper;
}
