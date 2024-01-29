import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {FinishCareerQuizRequest} from "./finishCareerQuiz.request";

@Injectable({
  providedIn: 'root'
})

export class FinishCareerQuizService {
  private _http = inject(HttpClient)
  finishCareerQuiz(requestData:FinishCareerQuizRequest): Observable<ResponseData<number>> {
    return this._http.post<ResponseData<number>>(environment.baseUrl + APIRoutesName.finishCareerQuiz,requestData);
  }

}
