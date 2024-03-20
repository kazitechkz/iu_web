import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Wallet} from "../../../models/wallet.model";
import {Pagination} from "../../pagination";
import {WalletRatingRequest} from "./walletRating.request";
import {WalletRatingModel} from "./walletRating.model";

@Injectable({
  providedIn: 'root'
})

export class WalletRatingService {
  private _http = inject(HttpClient)

  walletRating(req: WalletRatingRequest): Observable<ResponseData<WalletRatingModel>> {
    let params = new HttpParams();
    params = params.append("page",req.page.toString());
    return this._http.get<ResponseData<WalletRatingModel>>(environment.baseUrl + APIRoutesName.walletRating, {params});
  }

}
