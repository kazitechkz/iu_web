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

  createAttemptSettings(data: CreateAttemptSettingsRequest): Observable<ResponseData<AttemptSetting>> {
    return this._http.post<ResponseData<AttemptSetting>>(environment.baseUrl + APIRoutesName.createAttemptSettings, data);
  }

}
