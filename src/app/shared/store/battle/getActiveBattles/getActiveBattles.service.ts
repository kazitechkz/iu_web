import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetActiveBattlesRequest} from "./getActiveBattles.request";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

@Injectable({
  providedIn: 'root'
})

export class GetActiveBattlesService {
  private _http = inject(HttpClient)
  getActiveBattles(requestData:GetActiveBattlesRequest): Observable<ResponseData<Pagination<Battle[]>>> {
    let formData = new HttpParams();
    if(requestData.page){
      formData = formData.append("page",requestData.page.toString());
    }
    return this._http.get<ResponseData<Pagination<Battle[]>>>(environment.baseUrl + APIRoutesName.getActiveBattles,{params:formData});
  }

}
