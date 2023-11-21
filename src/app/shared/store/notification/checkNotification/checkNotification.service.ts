import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
  providedIn: 'root'
})

export class CheckNotificationService {
  private _http = inject(HttpClient)

  checkNotification(id:number): Observable<ResponseData<boolean>> {
    return this._http.get<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.checkNotification + "/" + id.toString());
  }

}
