import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ChangeProfileRequest, LoginRequest} from "./account.request";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {Me} from "../../../models/user.model";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class AccountService {
    private _http = inject(HttpClient)

    meUser(): Observable<ResponseData<Me>> {
        return this._http.get<ResponseData<Me>>(environment.baseUrl + APIRoutesName.me);
    }
    updateUser(req: ChangeProfileRequest): Observable<ResponseData<boolean>> {
        return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.updateMe, req);
    }

}
