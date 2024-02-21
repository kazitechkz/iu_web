import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VerifyEmailRequest} from "./verifyEmail.request";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class VerifyEmailService {
    private _http = inject(HttpClient)
    verifyUser(requestData: VerifyEmailRequest): Observable<ResponseData<boolean>> {
        return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.verifyRoute, requestData);
    }

}
