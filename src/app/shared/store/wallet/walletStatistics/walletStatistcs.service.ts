import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {WalletStatisticsModel} from "./walletStatistics.model";
import {WalletStatisticsRequest} from "./walletStatistics.request";

@Injectable({
  providedIn: 'root'
})

export class WalletStatistcsService {
  private _http = inject(HttpClient)

  walletStatistics(requestData:WalletStatisticsRequest): Observable<ResponseData<WalletStatisticsModel>> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("to_date",requestData.to_date.toString());
    httpParams = httpParams.append("from_date",requestData.from_date.toString());
    return this._http.get<ResponseData<WalletStatisticsModel>>(environment.baseUrl + APIRoutesName.walletStatistics,{params:httpParams});
  }

}
