import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AttemptModel} from "../../../models/attempt";

@Injectable({
  providedIn: 'root'
})

export class GetAttemptByPromoCodeService {
  private _http = inject(HttpClient)

  getAttemptByPromoCode(promoCode:string): Observable<ResponseData<AttemptModel>> {
    return this._http.get<ResponseData<AttemptModel>>(environment.baseUrl + APIRoutesName.getAttemptByPromoCode + "/" + promoCode);
  }

}
