import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AllInformationsRequest} from "./allInformations.request";
import {Information} from "../../../models/information.model";
import {Pagination} from "../../pagination";

@Injectable({
  providedIn: 'root'
})

export class AllInformationsService {
  private _http = inject(HttpClient)

  getAllInformations(requestData:AllInformationsRequest): Observable<ResponseData<Pagination<Information[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<Information[]>>>(environment.baseUrl + APIRoutesName.allInformations,{params:params});
  }

}
