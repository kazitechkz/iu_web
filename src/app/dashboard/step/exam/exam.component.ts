import {AfterViewInit, Component, DestroyRef, DoCheck, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {passSubStepExamAction, subStepExamAction} from "../../../shared/store/step/exam/subStepExam.action";
import {getSubStepExamState, passSubStepExamState} from "../../../shared/store/step/exam/subStepExam.selector";
import {SubStepExamModel} from "../../../shared/models/question.model";
import {distinctUntilChanged} from "rxjs";
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
  destroyRef = inject(DestroyRef);
  public questions: SubStepExamModel[] | null = []
  //@ts-ignore
  public keys: IterableIterator<number> = []
  public answers: {sub_step_id: number, answer: string, locale_id: number}[] = []
  getQuestions() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepExamAction({requestData: {sub_step_id: params['sub_step_id'], locale_id: params['locale_id']}}))
      this._store.select(getSubStepExamState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.questions = item.data
      })
    })
  }

  add(questionId: number, answer: string) {
    if (this.answers.find(el => el.sub_step_id == questionId)) {
      this.answers.forEach((el) => {
        if (el.sub_step_id == questionId) {
          el.answer = answer
        }
      })
    } else {
      this.answers.push({sub_step_id: questionId, answer: answer, locale_id: StrHelper.getLocaleIdByCurrentLang(this.translate.currentLang)})
    }
  }

  getAnswers() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(passSubStepExamAction({requestData: this.answers}))
      this._store.select(passSubStepExamState).pipe(distinctUntilChanged(), autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this._router.navigateByUrl('/dashboard/result-exam/'+params['sub_step_id']+'/'+params['locale_id'])
      })
    })
  }

  ngOnInit(): void {
    this.getQuestions()
  }

  ngDoCheck() {
    if (this.questions) {
      this.keys = this.questions.keys()
    }
  }
}
