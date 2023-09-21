import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../register/RegisterRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ResetPasswordRequest, SendResetTokenRequest} from "./Reset.request";

@Injectable({
  providedIn: 'root'
})

export class ResetService {
  private _http = inject(HttpClient);

  SendResetToken(requestData: SendResetTokenRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.sendResetTokenRoute, requestData);
  }

  ResetPassword(requestData: ResetPasswordRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.resetRoute, requestData);
  }

}
