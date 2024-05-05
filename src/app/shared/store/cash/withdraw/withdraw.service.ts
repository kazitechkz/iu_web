import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {WithdrawRequest} from "./withdraw.request";
import {WithdrawModel} from "./withdraw.model";

@Injectable({
  providedIn: 'root'
})

export class WithdrawService {
  private _http = inject(HttpClient)

  getMyHistories(): Observable<ResponseData<WithdrawModel[]>> {
    return this._http.get<ResponseData<WithdrawModel[]>>(environment.baseUrl + APIRoutesName.cashHistories);
  }
  requestWithdraw(req: WithdrawRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.requestWithdraw, req);
  }

}
