import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Wallet} from "../../../models/wallet.model";

@Injectable({
  providedIn: 'root'
})

export class MyWalletService {
  private _http = inject(HttpClient)

  getMyWallet(): Observable<ResponseData<Wallet>> {
    return this._http.get<ResponseData<Wallet>>(environment.baseUrl + APIRoutesName.myWallet);
  }

}
