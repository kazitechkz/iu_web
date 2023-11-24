import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AttemptSetting} from "../../../shared/models/attemptSetting.model";
import {AttemptSettingUNT} from "../../../shared/models/attemptSettingUNT.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  GetDetailExamByIdAction,
  GetDetailUNTByIdAction
} from "../../../shared/store/teacher/exams/detail-exam/detail-exam.action";
import {
  getDetailExamByIdStateSelector,
  getDetailUNTByIdStateSelector
} from "../../../shared/store/teacher/exams/detail-exam/detail-exam.selector";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-detail-unt-exam',
  templateUrl: './detail-unt-exam.component.html',
  styleUrls: ['./detail-unt-exam.component.scss']
})
export class DetailUntExamComponent implements OnInit {
  private _route = inject(ActivatedRoute)
  private _store = inject(Store)
  destroyRef = inject(DestroyRef);
  // @ts-ignore
  exam: AttemptSettingUNT

  ngOnInit(): void {
    this.getDetailUNTExam()
  }

  getDetailUNTExam() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(GetDetailUNTByIdAction({ id: params['id'] }))
      this._store.select(getDetailUNTByIdStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.exam = item.data
        }
      })
    })
  }

  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
  protected readonly String = String;
}
