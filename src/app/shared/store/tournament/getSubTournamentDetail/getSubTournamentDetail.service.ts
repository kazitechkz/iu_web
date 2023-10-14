import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetSubTournamentDetailModel} from "./getSubTournamentDetail.model";

@Injectable({
  providedIn: 'root'
})

export class GetSubTournamentDetailService {
  private _http = inject(HttpClient)

  getSubTournamentDetail(id:any): Observable<ResponseData<GetSubTournamentDetailModel>> {
    return this._http.get<ResponseData<GetSubTournamentDetailModel>>(environment.baseUrl + APIRoutesName.getSubTournamentDetail + "/" + id.toString());
  }

}
