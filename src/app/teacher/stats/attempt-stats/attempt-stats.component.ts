import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {StatExamByIdAction} from "../../../shared/store/teacher/stats/stat-by-attempt.action";
import {statExamByIdStateSelector} from "../../../shared/store/teacher/stats/stat-by-attempt.selector";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Question} from "../../../shared/models/question.model";

@Component({
  selector: 'app-attempt-stats',
  templateUrl: './attempt-stats.component.html',
  styleUrls: ['./attempt-stats.component.scss']
})
export class AttemptStatsComponent implements OnInit {
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef: DestroyRef = inject(DestroyRef);
  public dialog = inject(NgxSmartModalService)
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

  openDialog(event: string) {
    this.dialog.getModal(event).open()
  }
  checkAnswer(answer: string, user_answer: string | null, is_right: boolean | null): string {
    if (user_answer) {
      if (answer == user_answer && is_right) {
        return 'green'
      } else if (answer == user_answer && !is_right) {
        return 'red'
      } else {
        return ''
      }
    } else {
      return ''
    }
  }

  is_answered_correct(answer:string, questions: Question){
    if (questions) {
      let correct_answers = questions.correct_answers?.split(",");
      if(correct_answers){
        return correct_answers.includes(answer);
      }
    }
    return false;
  }
  getSubjectResult(subject_id: number) {
    return this.statByAttempt.stat_by_attempt.filter((item: { subject_id: number; }) => item.subject_id == subject_id);
  }

  protected readonly faCoins = faCoins;
  protected readonly ImageHelper = ImageHelper;
  protected readonly String = String;
}
