import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {KundelikRequest} from "./kundelik.request";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AuthInfo} from "../login/loginRequest";

@Injectable({
    providedIn: 'root'
})

export class KundelikService {
    private _http = inject(HttpClient)
    kundelikUser(requestData: KundelikRequest): Observable<ResponseData<AuthInfo>> {
        return this._http.post<ResponseData<AuthInfo>>(environment.baseUrl + APIRoutesName.kundelikRoute, requestData);
    }

}
