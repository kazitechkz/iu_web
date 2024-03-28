import {Component, DestroyRef, DoCheck, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {passSubStepExamAction, subStepExamAction} from "../../../shared/store/step/exam/subStepExam.action";
import {getSubStepExamState, passSubStepExamState} from "../../../shared/store/step/exam/subStepExam.selector";
import {Question, SubStepExamModel} from "../../../shared/models/question.model";
import {distinctUntilChanged} from "rxjs";
import {Location} from "@angular/common";
import {resultExamAction, resultExamClearDataAction} from "../../../shared/store/step/resultExam/resultExam.action";
import {TwNotification} from "ng-tw";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit, DoCheck {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  private _location = inject(Location)
  destroyRef = inject(DestroyRef);
  public questions: SubStepExamModel[] | null = []
  private _notification = inject(TwNotification)
  public localeID = 1
  //@ts-ignore
  public keys: IterableIterator<number> = []
  public answers: { sub_step_test_id: number, answer: string, locale_id: number }[] = []

  getQuestions() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepExamAction({
        requestData: {
          sub_step_id: params['sub_step_test_id'],
          locale_id: params['locale_id']
        }
      }))
      this._store.select(getSubStepExamState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.questions = item.data;
        console.log(item.data);
      })
    })
  }

  add(questionId: number, answer: string) {
    if (this.answers.find(el => el.sub_step_test_id == questionId)) {
      this.answers.forEach((el) => {
        if (el.sub_step_test_id == questionId) {
          el.answer = answer
        }
      })
    } else {
      this.answers.push({sub_step_test_id: questionId, answer: answer, locale_id: this.localeID})
    }
  }

  getCountAnswers(question: Question) {
    return [
      {
        index: 1,
        key: 'a',
        value: question.answer_a
      },
      {
        index: 2,
        key: 'b',
        value: question.answer_b
      },
      {
        index: 3,
        key: 'c',
        value: question.answer_c
      },
      {
        index: 4,
        key: 'd',
        value: question.answer_d
      },
      {
        index: 5,
        key: 'e',
        value: question.answer_e
      },
      {
        index: 6,
        key: 'f',
        value: question.answer_f
      },
      {
        index: 7,
        key: 'g',
        value: question.answer_g
      },
      {
        index: 8,
        key: 'h',
        value: question.answer_h
      },
    ]
  }

  getAnswers() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(passSubStepExamAction({requestData: this.answers}))
      this._store.select(passSubStepExamState).pipe(distinctUntilChanged(), autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this._notification.show({ type: 'info', title: 'Ураа!', text: 'Вы получили ' + item.data + ' IU Coin' })
          this._store.dispatch(resultExamClearDataAction())
          this._router.navigateByUrl('/dashboard/result-exam/' + params['sub_step_test_id'] + '/' + this.localeID).then(r => null)
        }
      })
    })
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.localeID = params['locale_id']
    })
    this.getQuestions()
  }

  ngDoCheck() {
    if (this.questions) {
      this.keys = this.questions.keys()
    }
  }

    protected readonly RoutesName = RoutesName;
    protected readonly StrHelper = StrHelper;
}
