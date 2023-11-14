import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {WalletIndexModel} from "./walletIndex.model";

@Injectable({
  providedIn: 'root'
})

export class WalletIndexService {
  private _http = inject(HttpClient)

  walletIndex(): Observable<ResponseData<WalletIndexModel>> {
    return this._http.get<ResponseData<WalletIndexModel>>(environment.baseUrl + APIRoutesName.walletIndex);
  }

}
