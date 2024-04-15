import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GoogleRequest} from "./google.request";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AuthInfo} from "../login/loginRequest";
import {SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
    providedIn: 'root'
})

export class GoogleService {
    private _http = inject(HttpClient)
    googleUser(requestData: SocialUser): Observable<ResponseData<AuthInfo>> {
        return this._http.post<ResponseData<AuthInfo>>(environment.baseUrl + APIRoutesName.googleRoute, requestData);
    }

}
