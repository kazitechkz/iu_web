import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {faArrowRight, faEye} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment";
import {RoutesName} from "../../../core/constants/routes.constants";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {
  GetMyAttemptSingleSettingsRequest
} from "../../../shared/store/attemptSettings/getMyAttemptSingleSettings/getMyAttemptSingleSettings.request";
import {
  GetMyAttemptUNTSettingsRequest
} from "../../../shared/store/attemptSettings/getMyAttemptUNTSettings/getMyAttemptUNTSettings.request";
import {Appeal} from "../../../shared/models/appeal.model";
import {AttemptSettingStudentModel} from "../../../shared/models/attemptSettingStudent.model";
import {AttemptSettingUNT} from "../../../shared/models/attemptSettingUNT.model";
import {initTE, Tab} from "tw-elements";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getMyAttemptSingleSettingsAction
} from "../../../shared/store/attemptSettings/getMyAttemptSingleSettings/getMyAttemptSingleSettings.action";
import {
  getMyAttemptSingleSettingsSelector
} from "../../../shared/store/attemptSettings/getMyAttemptSingleSettings/getMyAttemptSingleSettings.selector";
import {
  getMyAttemptUNTSettingsAction
} from "../../../shared/store/attemptSettings/getMyAttemptUNTSettings/getMyAttemptUNTSettings.action";
import {
  getMyAttemptUNTSettingsSelector
} from "../../../shared/store/attemptSettings/getMyAttemptUNTSettings/getMyAttemptUNTSettings.selector";

@Component({
  selector: 'app-my-attempt-settings',
  templateUrl: './my-attempt-settings.component.html',
  styleUrls: ['./my-attempt-settings.component.scss']
})
export class MyAttemptSettingsComponent implements OnInit{
  public translate = inject(GlobalTranslateService);
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Data
  //@ts-ignore
  public attemptSingleSettings:Pagination<AttemptSettingStudentModel[]>;
  //@ts-ignore
  public attemptUNTSettings:Pagination<AttemptSettingUNT[]>;
  public requestUNT:GetMyAttemptSingleSettingsRequest = {
    page:1
  };
  public requestSingle:GetMyAttemptUNTSettingsRequest = {
    page:1
  }
  ngOnInit(): void {
    initTE({Tab});
    this.getMyUNTSettings();
    this.getMySingleSettings();
  }


  constructor() {
    this._store.select(getMyAttemptSingleSettingsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.attemptSingleSettings = item.data;
      }
    });

  }

  getMySingleSettings(){
    let request:GetMyAttemptSingleSettingsRequest = Object.assign({},this.requestSingle);
    this._store.dispatch(getMyAttemptSingleSettingsAction({requestData:request}));
    this._store.select(getMyAttemptUNTSettingsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.attemptUNTSettings = item.data;
      }
    });

  }

  getMyUNTSettings(){
    let request:GetMyAttemptUNTSettingsRequest = Object.assign({},this.requestUNT);
    this._store.dispatch(getMyAttemptUNTSettingsAction({requestData:request}));

  }
  changeSingleSettingPage($event:number){
    this.requestSingle.page = $event;
    this.getMySingleSettings();
  }
  changeUNTSettingPage($event:number){
    this.requestUNT.page = $event;
    this.getMyUNTSettings();
  }

    protected readonly faEye = faEye;
    protected readonly ImageHelper = ImageHelper;
    protected readonly moment = moment;
    protected readonly RoutesName = RoutesName;


  protected readonly faArrowRight = faArrowRight;
}
