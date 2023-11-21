import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {GetNotificationAllRequest} from "./getNotificationAll.request";
import {NotificationModel} from "../../../models/notification.model";

@Injectable({
  providedIn: 'root'
})

export class GetNotificationAllService {
  private _http = inject(HttpClient)

  getNotificationAll(requestData:GetNotificationAllRequest): Observable<ResponseData<Pagination<NotificationModel[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    if(requestData.type_id){
      params = params.append("type_id",requestData.type_id.toString());
    }
    if(requestData.status){
      params = params.append("status",requestData.status.toString());
    }
    if(requestData.search){
      params = params.append("search",requestData.search.toString());
    }
    return this._http.get<ResponseData<Pagination<NotificationModel[]>>>(environment.baseUrl + APIRoutesName.getNotificationAll,{params:params});
  }

}
