import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ResultByAttemptIdModel} from "./resultByAttemptId.action.model";

@Injectable({
  providedIn: 'root'
})

export class ResultByAttemptIdService {
  private _http = inject(HttpClient)

  getResultByAttemptId(id:number): Observable<ResponseData<ResultByAttemptIdModel>> {
    return this._http.get<ResponseData<ResultByAttemptIdModel>>(environment.baseUrl + APIRoutesName.resultByAttemptId + "/" + id.toString());
  }

}
