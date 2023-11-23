import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AttemptSetting} from "../../shared/models/attemptSetting.model";
import {Store} from "@ngrx/store";
import {
  getAllAttemptSettingsAction
} from "../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.action";
import {
  getAllAttemptSettingsSelector
} from "../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {AllAttemptRequest} from "../../shared/store/attempt/allAttempt/allAttempt.request";
import {Pagination} from "../../shared/store/pagination";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {deleteExamByIdAction, deleteUNTExamByIdAction} from "../../shared/store/teacher/exams/exams.action";
import {TwNotification} from "ng-tw";
import {
  getAllAttemptSettingsUNTAction
} from "../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.action";
import {
  getAllAttemptSettingsUNTSelector
} from "../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.selector";
import {AttemptSettingUNT} from "../../shared/models/attemptSettingUNT.model";
import {StrHelper} from "../../core/helpers/str.helper";
import {RoutesName} from "../../core/constants/routes.constants";

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _notification = inject(TwNotification)
  //@ts-ignore
  myTests: Pagination<AttemptSetting[]>;
  // @ts-ignore
  myUNTTests: Pagination<AttemptSettingUNT[]>;
  params = {page:1};
  ngOnInit(): void {
    this.getMyTests()
    this.getMyUNTTests()
  }

  getMyTests() {
    let request = Object.assign({},this.params) as AllAttemptRequest;
    this._store.dispatch(getAllAttemptSettingsAction({requestData: request}))
    this._store.select(getAllAttemptSettingsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.myTests = item.data
      }
    })
  }
  getMyUNTTests() {
    let request = Object.assign({}, this.params) as AllAttemptRequest;
    this._store.dispatch(getAllAttemptSettingsUNTAction({requestData: request}))
    this._store.select(getAllAttemptSettingsUNTSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.myUNTTests = item.data
      }
    })
  }

  deleteExamById(id: number) {
    this._store.dispatch(deleteExamByIdAction({id: id}))
    this._notification.show({ type: 'success', title: 'Успешно удален' })
    this.getMyTests()
  }
  deleteUNTExamById(id: number) {
    this._store.dispatch(deleteUNTExamByIdAction({id: id}))
    this._notification.show({ type: 'success', title: 'Успешно удален' })
    this.getMyUNTTests()
  }
  pageChanged($event:number){
    this.params.page = $event;
    this.getMyTests();
  }

  protected readonly JSON = JSON;
  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
}
