import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ParticipateTournamentRequest} from "./participateTournament.request";
import {PayModel} from "../../paybox/pay_create/pay.model";

@Injectable({
  providedIn: 'root'
})

export class ParticipateTournamentService {
  private _http = inject(HttpClient)

  participateTournament(requestData:ParticipateTournamentRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.participateTournament,requestData);
  }

  payTournament(requestData:ParticipateTournamentRequest): Observable<ResponseData<PayModel>> {
    return this._http.post<ResponseData<PayModel>>(environment.baseUrl + APIRoutesName.payTournament,requestData);
  }

}
