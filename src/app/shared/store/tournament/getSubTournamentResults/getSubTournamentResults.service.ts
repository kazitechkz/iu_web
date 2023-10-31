import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetSubTournamentResultsRequest} from "./getSubTournamentResults.request";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";

@Injectable({
  providedIn: 'root'
})

export class GetSubTournamentResultsService {
  private _http = inject(HttpClient)

  getSubTournamentResults(parameters:GetSubTournamentResultsRequest): Observable<ResponseData<GetSubTournamentResultsModel>> {
    let httpParams = new HttpParams();
    if(parameters.page != null && parameters.page > 0){
      httpParams = httpParams.append("page",parameters.page.toString())
    }
    return this._http.get<ResponseData<GetSubTournamentResultsModel>>(environment.baseUrl + APIRoutesName.getSubTournamentResults + "/" + parameters.id.toString(),{params:httpParams});
  }

}
