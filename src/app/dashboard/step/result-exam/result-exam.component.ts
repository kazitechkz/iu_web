import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import { ColorConstants } from 'src/app/core/constants/color.constants';
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getResultExamState} from "../../../shared/store/step/resultExam/resultExam.selector";
import {resultExamAction} from "../../../shared/store/step/resultExam/resultExam.action";
import {ResultExamModel} from "../../../shared/models/resultExam.model";

@Component({
  selector: 'app-result-exam',
  templateUrl: './result-exam.component.html',
  styleUrls: ['./result-exam.component.scss']
})
export class ResultExamComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  protected readonly ColorConstants = ColorConstants
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  //@ts-ignore
  public results: ResultExamModel | null

  ngOnInit(): void {
    this.getResult()
  }

  getResult() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(resultExamAction({requestData: {sub_step_id: params['sub_step_id'], locale_id: params['locale_id']}}))
      this._store.select(getResultExamState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.results = item.data
      })
    })
  }

  checkAnswer(answer: string, user_answer: string, is_right: boolean): string {
    if (answer == user_answer && is_right) {
      return 'green'
    } else if (answer == user_answer && !is_right) {
      return 'red'
    }else {
      return ''
    }
  }

}
