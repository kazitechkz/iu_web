import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetSubTournamentParticipantsRequest} from "./getSubTournamentParticipants.request";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";

@Injectable({
  providedIn: 'root'
})

export class GetSubTournamentParticipantsService {
  private _http = inject(HttpClient)

  getSubTournamentParticipants(parameters:GetSubTournamentParticipantsRequest): Observable<ResponseData<Pagination<SubTournamentParticipant[]>>> {
    let httpParams = new HttpParams();
    if(parameters.page != null && parameters.page > 0){
      httpParams = httpParams.append("page",parameters.page.toString())
    }
    return this._http.get<ResponseData<Pagination<SubTournamentParticipant[]>>>(environment.baseUrl + APIRoutesName.getSubTournamentParticipants + "/" + parameters.id.toString(),{params:httpParams});
  }

}
