import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateBattleStepRequest} from "./createBattleStep.request";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

@Injectable({
  providedIn: 'root'
})

export class CreateBattleStepService {
  private _http = inject(HttpClient)
  createBattleStep(requestData:CreateBattleStepRequest): Observable<ResponseData<GivenBattleQuestionModel>> {
    return this._http.post<ResponseData<GivenBattleQuestionModel>>(environment.baseUrl + APIRoutesName.battleStepCreate,requestData);
  }

}
