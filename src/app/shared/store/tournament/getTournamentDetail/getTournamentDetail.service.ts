import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetTournamentDetailModel} from "./getTournamentDetail.model";

@Injectable({
  providedIn: 'root'
})

export class GetTournamentDetailService {
  private _http = inject(HttpClient)

  getTournamentDetail(id:any): Observable<ResponseData<GetTournamentDetailModel>> {
    return this._http.get<ResponseData<GetTournamentDetailModel>>(environment.baseUrl + APIRoutesName.getTournamentDetail + "/" + id.toString());
  }

}
