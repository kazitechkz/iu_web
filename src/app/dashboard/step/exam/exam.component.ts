import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subStepDetailAction} from "../../../shared/store/step/subStep/subStep.action";
import {getSubStepDetailState} from "../../../shared/store/step/subStep/subStep.selector";
import {subStepExamAction} from "../../../shared/store/step/exam/subStepExam.action";
import {getSubStepExamState} from "../../../shared/store/step/exam/subStepExam.selector";
import {SubStepExamModel} from "../../../shared/models/question.model";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  public examModel: SubStepExamModel[] | null = []

  getQuestions() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepExamAction({requestData: {sub_step_id: params['sub_step_id'], locale_id: params['locale_id']}}))
      this._store.select(getSubStepExamState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.examModel = item.data
      })
    })
  }

  ngOnInit(): void {
    this.getQuestions()
  }
}
