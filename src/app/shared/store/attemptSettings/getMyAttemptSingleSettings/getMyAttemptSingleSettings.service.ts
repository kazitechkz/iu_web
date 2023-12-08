import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMyAttemptSingleSettingsRequest} from "./getMyAttemptSingleSettings.request";
import {Pagination} from "../../pagination";
import {AttemptSettingStudentModel} from "../../../models/attemptSettingStudent.model";

@Injectable({
  providedIn: 'root'
})

export class GetMyAttemptSingleSettingsService {
  private _http = inject(HttpClient)

  getMyAttemptSingleSettings(requestData: GetMyAttemptSingleSettingsRequest): Observable<ResponseData<Pagination<AttemptSettingStudentModel[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<AttemptSettingStudentModel[]>>>(environment.baseUrl + APIRoutesName.getMyAttemptSingleSettings, {params:params});
  }

}
