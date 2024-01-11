import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Attempt} from "../../../models/attempt.model";
import {CreateTournamentAttemptRequest} from "./createTournamentAttempt.request";

@Injectable({
  providedIn: 'root'
})

export class CreateTournamentAttemptService {
  private _http = inject(HttpClient)

  createAttempt(data:CreateTournamentAttemptRequest): Observable<ResponseData<number>> {
    return this._http.post<ResponseData<number>>(environment.baseUrl + APIRoutesName.createTournamentAttempt,data);
  }

}
