import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ParticipateTournamentRequest} from "./participateTournament.request";

@Injectable({
  providedIn: 'root'
})

export class ParticipateTournamentService {
  private _http = inject(HttpClient)

  participateTournament(requestData:ParticipateTournamentRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.participateTournament,requestData);
  }

}
