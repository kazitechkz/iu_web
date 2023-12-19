import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";
import {FinishBattleResultModel} from "../../../models/finishBattleResult.model";

@Injectable({
  providedIn: 'root'
})

export class FinishBattleResultService {
  private _http = inject(HttpClient)
  finishBattleResult(step_id:number): Observable<ResponseData<FinishBattleResultModel>> {
    return this._http.get<ResponseData<FinishBattleResultModel>>(environment.baseUrl + APIRoutesName.finishBattleResult + "/" + step_id.toString());
  }

}
