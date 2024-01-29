import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {PayModel} from "./pay.model";
import {PayRequest} from "./pay.request";

@Injectable({
  providedIn: 'root'
})

export class PayCreateService {
  private _http = inject(HttpClient)

  payCreate(request: PayRequest): Observable<ResponseData<PayModel>> {
    return this._http.post<ResponseData<PayModel>>(environment.baseUrl + APIRoutesName.payCreate, request);
  }

}
