import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Battle} from "../../../models/battle.model";
import {GetBattleStatsModel} from "./getBattleStats.model";

@Injectable({
  providedIn: 'root'
})

export class GetBattleStatsService {
  private _http = inject(HttpClient)
  getBattleStats(): Observable<ResponseData<GetBattleStatsModel>> {
    return this._http.get<ResponseData<GetBattleStatsModel>>(environment.baseUrl + APIRoutesName.getBattleStats);
  }

}
