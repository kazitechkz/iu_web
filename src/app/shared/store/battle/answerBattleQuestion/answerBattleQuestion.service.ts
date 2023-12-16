import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AnswerBattleQuestionRequest} from "./answerBattleQuestion.request";
import {BattleAnswerResultModel} from "../../../models/battleAnswerResult.model";

@Injectable({
  providedIn: 'root'
})

export class AnswerBattleQuestionService {
  private _http = inject(HttpClient)
  answerBattleQuestion(requestData:AnswerBattleQuestionRequest): Observable<ResponseData<BattleAnswerResultModel>> {
    return this._http.post<ResponseData<BattleAnswerResultModel>>(environment.baseUrl + APIRoutesName.battleAnswer,requestData);
  }

}
