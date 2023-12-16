import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Battle} from "../../../models/battle.model";

@Injectable({
  providedIn: 'root'
})

export class GetBattleByPromoService {
  private _http = inject(HttpClient)
  getBattleByPromo(promo_code:string): Observable<ResponseData<Battle>> {
    return this._http.get<ResponseData<Battle>>(environment.baseUrl + APIRoutesName.getBattleByPromoCode + "/" + promo_code.toString());
  }

}
