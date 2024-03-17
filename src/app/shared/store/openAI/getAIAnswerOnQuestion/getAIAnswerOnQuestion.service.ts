import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetAIAnswerOnQuestionRequest} from "./getAIAnswerOnQuestion.request";

@Injectable({
  providedIn: 'root'
})

export class GetAIAnswerOnQuestionService {
  private _http = inject(HttpClient)

  getAIAnswerOnQuestion(requestData:GetAIAnswerOnQuestionRequest): Observable<ResponseData<string>> {
    return this._http.get<ResponseData<string>>(environment.baseUrl + APIRoutesName.getAIAnswerOnQuestion + "/" + requestData.question_id.toString() + "?status=" + requestData.status??"old" );
  }

}
