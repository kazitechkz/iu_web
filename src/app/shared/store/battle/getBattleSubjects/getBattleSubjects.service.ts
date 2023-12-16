import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Battle} from "../../../models/battle.model";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";

@Injectable({
  providedIn: 'root'
})

export class GetBattleSubjectsService {
  private _http = inject(HttpClient)
  getBattleSubjects(step_id:number): Observable<ResponseData<ProposeSubjectForBattleModel>> {
    return this._http.get<ResponseData<ProposeSubjectForBattleModel>>(environment.baseUrl + APIRoutesName.getBattleSubjects + "/" + step_id.toString());
  }

}
