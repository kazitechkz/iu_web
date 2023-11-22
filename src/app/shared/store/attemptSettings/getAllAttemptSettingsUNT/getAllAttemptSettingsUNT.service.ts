import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

@Injectable({
  providedIn: 'root'
})

export class GetAllAttemptSettingsUNTService {
  private _http = inject(HttpClient)

  getAllAttemptSettingsUNT(requestData: AllAttemptRequest): Observable<ResponseData<Pagination<AttemptSettingUNT[]>>> {
    let params = new HttpParams();
    if (requestData.page) {
      params = params.append("page", requestData.page);
    }
    return this._http.get<ResponseData<Pagination<AttemptSettingUNT[]>>>(environment.baseUrl + APIRoutesName.getAllAttemptSettingsUNT, {params: params});
  }

}
