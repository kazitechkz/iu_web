import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {TwNotification} from "ng-tw";
import {Pagination} from "../../../shared/store/pagination";
import {AttemptSetting} from "../../../shared/models/attemptSetting.model";
import {AttemptSettingUNT} from "../../../shared/models/attemptSettingUNT.model";
import {AllAttemptRequest} from "../../../shared/store/attempt/allAttempt/allAttempt.request";
import {
  getAllAttemptSettingsAction
} from "../../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.action";
import {
  getAllAttemptSettingsSelector
} from "../../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getAllAttemptSettingsUNTAction
} from "../../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.action";
import {
  getAllAttemptSettingsUNTSelector
} from "../../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.selector";
import {deleteExamByIdAction, deleteUNTExamByIdAction} from "../../../shared/store/teacher/exams/exams.action";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-unt-tests',
  templateUrl: './unt-tests.component.html',
  styleUrls: ['./unt-tests.component.scss']
})
export class UntTestsComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _notification = inject(TwNotification)
  // @ts-ignore
  myUNTTests: Pagination<AttemptSettingUNT[]>;
  params = {page:1};
  ngOnInit(): void {
    this.getMyUNTTests()
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
  deleteUNTExamById(id: number) {
    this._store.dispatch(deleteUNTExamByIdAction({id: id}))
    this._notification.show({ type: 'success', title: 'Успешно удален' })
    this.getMyUNTTests()
  }
  pageChanged($event:number){
    this.params.page = $event;
  }

  protected readonly JSON = JSON;
  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
}
