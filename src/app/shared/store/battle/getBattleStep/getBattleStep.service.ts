import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Battle} from "../../../models/battle.model";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

@Injectable({
  providedIn: 'root'
})

export class GetBattleStepService {
  private _http = inject(HttpClient)
  getBattleStep(step_id:number): Observable<ResponseData<GivenBattleQuestionModel>> {
    return this._http.get<ResponseData<GivenBattleQuestionModel>>(environment.baseUrl + APIRoutesName.getBattleStep + "/" + step_id.toString());
  }

}
