import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "./loginRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {UserInfo} from "../../../models/user.model";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private _http = inject(HttpClient)

    loginUser(requestData: LoginRequest): Observable<ResponseData<string>> {
        return this._http.post<ResponseData<string>>(environment.baseUrl + APIRoutesName.loginRoute, requestData);
    }

}
