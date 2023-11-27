import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {TwNotification} from "ng-tw";
import {Pagination} from "../../../shared/store/pagination";
import {AttemptSetting} from "../../../shared/models/attemptSetting.model";
import {AllAttemptRequest} from "../../../shared/store/attempt/allAttempt/allAttempt.request";
import {
  getAllAttemptSettingsAction
} from "../../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.action";
import {
  getAllAttemptSettingsSelector
} from "../../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {deleteExamByIdAction} from "../../../shared/store/teacher/exams/exams.action";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-single-tests',
  templateUrl: './single-tests.component.html',
  styleUrls: ['./single-tests.component.scss']
})
export class SingleTestsComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _notification = inject(TwNotification)
  //@ts-ignore
  myTests: Pagination<AttemptSetting[]>;
  params = {page:1};
  ngOnInit(): void {
    this.getMyTests()
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

  deleteExamById(id: number) {
    this._store.dispatch(deleteExamByIdAction({id: id}))
    this._notification.show({ type: 'success', title: 'Успешно удален' })
    this.getMyTests()
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
