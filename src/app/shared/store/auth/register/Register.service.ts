import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./RegisterRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    private _http = inject(HttpClient);

    RegisterUser(requestData: RegisterRequest): Observable<ResponseData<boolean>> {
        return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.registerRoute, requestData);
    }


}
