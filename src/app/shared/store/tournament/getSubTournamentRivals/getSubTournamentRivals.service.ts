import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {GetSubTournamentRivalsRequest} from "./getSubTournamentRivals.request";
import {SubTournamentRival} from "../../../models/subTournamentRival.model";

@Injectable({
  providedIn: 'root'
})

export class GetSubTournamentRivalsService {
  private _http = inject(HttpClient)

  getSubTournamentRivals(parameters:GetSubTournamentRivalsRequest): Observable<ResponseData<SubTournamentRival[]>> {
    return this._http.get<ResponseData<SubTournamentRival[]>>(environment.baseUrl + APIRoutesName.getSubTournamentRivals + "/" + parameters.id.toString());
  }

}
