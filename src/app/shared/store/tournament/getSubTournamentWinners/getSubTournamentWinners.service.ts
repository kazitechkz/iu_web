import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {GetSubTournamentWinnersRequest} from "./getSubTournamentWinners.request";
import {SubTournamentWinner} from "../../../models/subTournamentWinner.model";

@Injectable({
  providedIn: 'root'
})

export class GetSubTournamentWinnersService {
  private _http = inject(HttpClient)

  getSubTournamentWinners(parameters:GetSubTournamentWinnersRequest): Observable<ResponseData<SubTournamentWinner[]>> {
    return this._http.get<ResponseData<SubTournamentWinner[]>>(environment.baseUrl + APIRoutesName.getSubTournamentWinners + "/" + parameters.id.toString());
  }

}
