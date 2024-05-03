import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {RefsRequest} from "./refs.request";
import {RefsModel} from "./refs.model";

@Injectable({
  providedIn: 'root'
})

export class RefsService {
  private _http = inject(HttpClient)

  getMyRefs(): Observable<ResponseData<RefsModel>> {
    return this._http.get<ResponseData<RefsModel>>(environment.baseUrl + APIRoutesName.refs);
  }

}
