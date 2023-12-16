import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateBattleRequest} from "./createBattle.request";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

@Injectable({
  providedIn: 'root'
})

export class CreateBattleService {
  private _http = inject(HttpClient)
  createBattle(requestData:CreateBattleRequest): Observable<ResponseData<Battle>> {
    return this._http.post<ResponseData<Battle>>(environment.baseUrl + APIRoutesName.battleCreate,requestData);
  }

}
