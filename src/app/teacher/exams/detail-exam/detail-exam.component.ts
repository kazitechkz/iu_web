import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {stepDetailAction} from "../../../shared/store/step/detail/stepDetail.action";
import {getStepDetailState} from "../../../shared/store/step/detail/stepDetail.selector";
import {Store} from "@ngrx/store";
import {GetDetailExamByIdAction} from "../../../shared/store/teacher/exams/detail-exam/detail-exam.action";
import {getDetailExamByIdStateSelector} from "../../../shared/store/teacher/exams/detail-exam/detail-exam.selector";
import {AttemptSetting} from "../../../shared/models/attemptSetting.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";

@Component({
  selector: 'app-detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.scss']
})
export class DetailExamComponent implements OnInit {
  private _route = inject(ActivatedRoute)
  private _store = inject(Store)
  destroyRef = inject(DestroyRef);
  // @ts-ignore
  exam: AttemptSetting
  ngOnInit(): void {
    this.getDetailExam()
  }

  getDetailExam() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(GetDetailExamByIdAction({ id: params['id'] }))
      this._store.select(getDetailExamByIdStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.exam = item.data
        }
      })
    })
  }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly parseInt = parseInt;
  protected readonly String = String;
}
