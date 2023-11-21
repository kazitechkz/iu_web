import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {NotificationType} from "../../../models/notificationType.model";

@Injectable({
  providedIn: 'root'
})

export class GetNotificationTypeAllService {
  private _http = inject(HttpClient)

  getNotificationTypeAll(): Observable<ResponseData<NotificationType[]>> {
    return this._http.get<ResponseData<NotificationType[]>>(environment.baseUrl + APIRoutesName.getNotificationTypeAll);
  }

}
