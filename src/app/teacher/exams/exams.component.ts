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

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  protected readonly parseInt = parseInt;
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
  pageChanged($event:number){
    this.params.page = $event;
    this.getMyTests();
  }

  protected readonly JSON = JSON;
}
