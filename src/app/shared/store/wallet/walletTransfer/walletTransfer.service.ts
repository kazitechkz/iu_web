import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {WalletTransferRequest} from "./walletTransfer.request";

@Injectable({
  providedIn: 'root'
})

export class WalletTransferService {
  private _http = inject(HttpClient)

  walletTransfer(requestData:WalletTransferRequest): Observable<ResponseData<boolean>> {
    let formData = new FormData();
    formData.append("toUserId",requestData.toUserId.toString());
    formData.append("amount",requestData.amount.toString());
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.walletTransfer,formData);
  }

}
