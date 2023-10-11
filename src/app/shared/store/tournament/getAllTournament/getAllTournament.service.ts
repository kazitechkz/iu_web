import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetAllTournamentModel} from "./getAllTournament.model";

@Injectable({
  providedIn: 'root'
})

export class GetAllTournamentService {
  private _http = inject(HttpClient)

  getAllTournament(): Observable<ResponseData<GetAllTournamentModel>> {
    return this._http.get<ResponseData<GetAllTournamentModel>>(environment.baseUrl + APIRoutesName.getAllTournament);
  }

}
