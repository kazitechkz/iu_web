import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMyAttemptUNTSettingsRequest} from "./getMyAttemptUNTSettings.request";
import {Pagination} from "../../pagination";
import {AttemptSettingStudentModel} from "../../../models/attemptSettingStudent.model";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

@Injectable({
  providedIn: 'root'
})

export class GetMyAttemptUNTSettingsService {
  private _http = inject(HttpClient)

  getMyAttemptUNTSettings(requestData: GetMyAttemptUNTSettingsRequest): Observable<ResponseData<Pagination<AttemptSettingUNT[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<AttemptSettingUNT[]>>>(environment.baseUrl + APIRoutesName.getMyAttemptUNTSettings, {params:params});
  }

}
