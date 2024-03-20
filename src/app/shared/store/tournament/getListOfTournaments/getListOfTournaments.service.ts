import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {Tournament} from "../../../models/tournament.model";
import {GetListOfTournamentsRequest} from "./getListOfTournaments.request";

@Injectable({
  providedIn: 'root'
})

export class GetListOfTournamentsService {
  private _http = inject(HttpClient)

  getListOfTournaments(requestData:GetListOfTournamentsRequest): Observable<ResponseData<Pagination<Tournament[]>>> {
    let request = new HttpParams();
    request = request.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<Tournament[]>>>(environment.baseUrl + APIRoutesName.getListTournament,{params:request});
  }

}
