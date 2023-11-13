import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";

@Injectable({
  providedIn: 'root'
})

export class GetAllAttemptSettingsService {
  private _http = inject(HttpClient)

  getAllAttemptSettings(requestData:AllAttemptRequest): Observable<ResponseData<Pagination<AttemptSetting[]>>> {
    let params = new HttpParams();
    if(requestData.page){
      params = params.append("page",requestData.page);
    }
    return this._http.get<ResponseData<Pagination<AttemptSetting[]>>>(environment.baseUrl + APIRoutesName.getAllAttemptSettings, {params:params});
  }

}
