import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Battle} from "../../../models/battle.model";
import {BattleStepQuestion} from "../../../models/battleStepQuestion.model";

@Injectable({
  providedIn: 'root'
})

export class GetBattleStepQuestionsService {
  private _http = inject(HttpClient)
  getBattleStepQuestions(promo_code:string): Observable<ResponseData<BattleStepQuestion[]>> {
    return this._http.get<ResponseData<BattleStepQuestion[]>>(environment.baseUrl + APIRoutesName.getBattleQuestionsByPromoCode + "/" + promo_code.toString());
  }

}
