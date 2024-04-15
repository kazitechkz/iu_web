import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class LogoutService {
    private _http = inject(HttpClient)

    logoutUser() {
        return this._http.get(environment.baseUrl + APIRoutesName.logoutRoute);
    }

}
