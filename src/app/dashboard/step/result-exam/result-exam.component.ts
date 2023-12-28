import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import { ColorConstants } from 'src/app/core/constants/color.constants';
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getResultExamState} from "../../../shared/store/step/resultExam/resultExam.selector";
import {resultExamAction} from "../../../shared/store/step/resultExam/resultExam.action";
import {ResultExamModel} from "../../../shared/models/resultExam.model";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import {Observable} from "rxjs";

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
  results$: Observable<ResponseData<ResultExamModel>>
  //@ts-ignore
  public results: ResultExamModel
  public check: boolean = true
  public subStepId: number | undefined
  public localeId: number | undefined
  public colors: Record<string, string> = {
    "1": "#b6659d",
    "2": "#ab7fe6",
    "3": "#c05851",
    "4": "#709048",
    "5": "#7e4de3",
    "6": "#4e954f",
    "7": "#3f83c6",
    "8": "#a5a538",
    "9": "#e5892d",
    "10": "#be9e1d",
    "11": "#5e7bdd",
    "12": "#746def",
    "13": "#7e7c32",
    "14": "#b5646d",
    "15": "#dc8e24",
    "16": "#50b8b9"
  };
  ngOnInit(): void {
    this.getResult()
  }

  getResult() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.subStepId = params['sub_step_id']
      this.localeId = params['locale_id']
      this._store.dispatch(resultExamAction({requestData: {sub_step_id: params['sub_step_id'], locale_id: params['locale_id']}}))
      this.results$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getResultExamState))
      this.results$.pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.results = item.data
      })
    })
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

    protected readonly StrHelper = StrHelper;
    protected readonly RoutesName = RoutesName;
}
