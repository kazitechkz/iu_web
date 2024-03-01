import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {PromoRequest} from "./promo.request";

@Injectable({
  providedIn: 'root'
})

export class PromoService {
  private _http = inject(HttpClient)

  getPromoPercentage(req: PromoRequest): Observable<ResponseData<number>> {
    return this._http.post<ResponseData<number>>(environment.baseUrl + APIRoutesName.getPromoPercentage, req);
  }
}
