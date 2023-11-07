import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthInfo, LoginRequest} from "./loginRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private _http = inject(HttpClient)

    loginUser(requestData: LoginRequest): Observable<ResponseData<AuthInfo>> {
        return this._http.post<ResponseData<AuthInfo>>(environment.baseUrl + APIRoutesName.loginRoute, requestData);
    }

}
