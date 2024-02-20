import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetVideoAuthorDetailModel} from "./getVideoAuthorDetail.model";
import {GetVideoAuthorDetailRequest} from "./getVideoAuthorDetail.request";

@Injectable({
  providedIn: 'root'
})

export class GetVideoAuthorDetailService {
  private _http = inject(HttpClient)

  getVideoAuthorDetailService(requestData:GetVideoAuthorDetailRequest): Observable<ResponseData<GetVideoAuthorDetailModel>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<GetVideoAuthorDetailModel>>(environment.baseUrl + APIRoutesName.getVideoAuthor  + "/" + requestData.id.toString(),{params:params});
  }

}
