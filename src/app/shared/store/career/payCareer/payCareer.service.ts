import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {PayCareerRequest} from "./payCareer.request";
import {PayModel} from "../../paybox/pay_create/pay.model";

@Injectable({
  providedIn: 'root'
})

export class PayCareerService {
  private _http = inject(HttpClient)
  payCareer(requestData:PayCareerRequest): Observable<ResponseData<PayModel>> {
    return this._http.post<ResponseData<PayModel>>(environment.baseUrl + APIRoutesName.payCareer,requestData);
  }

}
