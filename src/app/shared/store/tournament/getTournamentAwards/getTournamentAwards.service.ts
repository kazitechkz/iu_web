import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {GetTournamentAwardsRequest} from "./getTournamentAwards.request";
import {TournamentAward} from "../../../models/tournamentAward.model";

@Injectable({
  providedIn: 'root'
})

export class GetTournamentAwardsService {
  private _http = inject(HttpClient)

  getTournamentAwards(parameters:GetTournamentAwardsRequest): Observable<ResponseData<Pagination<TournamentAward[]>>> {
    let httpParams = new HttpParams();
    if(parameters.page != null && parameters.page > 0){
      httpParams = httpParams.append("page",parameters.page.toString())
    }
    return this._http.get<ResponseData<Pagination<TournamentAward[]>>>(environment.baseUrl + APIRoutesName.getTournamentAwards + "/" + parameters.id.toString(),{params:httpParams});
  }

}
