import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class UserCheckService {
    private _http = inject(HttpClient)
    userCheck(): Observable<ResponseData<boolean>> {
        return this._http.get<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.userCheck);
    }

}
