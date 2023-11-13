import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateAttemptSettingsRequest} from "./createAttemptSettings.request";
import {AttemptSetting} from "../../../models/attemptSetting.model";

@Injectable({
  providedIn: 'root'
})

export class CreateAttemptSettingsService {
  private _http = inject(HttpClient)

  createAttemptSettings(data:CreateAttemptSettingsRequest): Observable<ResponseData<AttemptSetting>> {
    let formData = new FormData();
    if(data.class_id){
      formData.append("class_id",data.class_id.toString());
    }
    if(data.users){
      for(var userId = 0; userId<data.users.length; userId.toString()){
        formData.append("users[]",data.users[userId].toString());
      }
    }
    if(data.hidden_fields){
      formData.append("hidden_fields",data.hidden_fields.toString());
    }
    formData.append("settings",data.settings);
    formData.append("locale_id",data.locale_id.toString());
    formData.append("subject_id",data.subject_id.toString());
    formData.append("time",data.time.toString());
    return this._http.post<ResponseData<AttemptSetting>>(environment.baseUrl + APIRoutesName.createAttemptSettings,formData);
  }

}
