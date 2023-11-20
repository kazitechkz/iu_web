import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateAttemptSettingsUNTRequest} from "./createAttemptSettingsUNT.request";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

@Injectable({
  providedIn: 'root'
})

export class CreateAttemptSettingsUNTService {
  private _http = inject(HttpClient)

  createAttemptSettingsUNT(data: CreateAttemptSettingsUNTRequest): Observable<ResponseData<AttemptSettingUNT>> {
    return this._http.post<ResponseData<AttemptSettingUNT>>(environment.baseUrl + APIRoutesName.createAttemptSettingsUNT, data);
  }

}
