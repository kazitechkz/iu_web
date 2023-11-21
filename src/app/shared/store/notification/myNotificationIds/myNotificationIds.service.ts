import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
  providedIn: 'root'
})

export class MyNotificationIdsService {
  private _http = inject(HttpClient)

  myNotificationIds(): Observable<ResponseData<number[]>> {
    return this._http.get<ResponseData<number[]>>(environment.baseUrl + APIRoutesName.myNotificationIds);
  }

}
