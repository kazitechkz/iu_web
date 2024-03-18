import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";
import {GetBattleHistoryRequest} from "./getBattleHistory.request";

@Injectable({
  providedIn: 'root'
})

export class GetBattleHistoryService {
  private _http = inject(HttpClient)
  getBattleHistory(requestData:GetBattleHistoryRequest): Observable<ResponseData<Pagination<Battle[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<Battle[]>>>(environment.baseUrl + APIRoutesName.getBattleHistory,{params});
  }

}
