import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Attempt} from "../../../models/attempt.model";
import {AllAttemptRequest} from "./allAttempt.request";
import {Pagination} from "../../pagination";

@Injectable({
  providedIn: 'root'
})

export class AllAttemptService {
  private _http = inject(HttpClient)

  allAttempt(parameters:AllAttemptRequest): Observable<ResponseData<Pagination<Attempt>>> {
    let httpParams = new HttpParams();
    if(parameters.page != null && parameters.page > 0){
      httpParams = httpParams.append("page",parameters.page.toString())
    }
    return this._http.get<ResponseData<Pagination<Attempt>>>(environment.baseUrl + APIRoutesName.userAttempts,{params:httpParams});
  }

}
