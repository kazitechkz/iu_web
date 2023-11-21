import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";
import {GetArraySettingsUNT} from "./getArraySettingsUNT.request";

@Injectable({
  providedIn: 'root'
})

export class GetArraySettingsUNTService {
  private _http = inject(HttpClient)

  getArraySettingsUNT(requestData: GetArraySettingsUNT): Observable<ResponseData<Record<any, any>[]>> {
    return this._http.post<ResponseData<Record<any, any>[]>>(environment.baseUrl + APIRoutesName.getArraySettingsUNT, requestData);
  }

}
