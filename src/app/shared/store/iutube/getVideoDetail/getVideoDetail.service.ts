import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetVideoDetailModel} from "./getVideoDetail.model";
import {GetVideoDetailRequest} from "./getVideoDetail.request";

@Injectable({
  providedIn: 'root'
})

export class GetVideoDetailService {
  private _http = inject(HttpClient)

  getVideoDetailService(requestData:GetVideoDetailRequest): Observable<ResponseData<GetVideoDetailModel>> {
    return this._http.get<ResponseData<GetVideoDetailModel>>(environment.baseUrl + APIRoutesName.getVideoDetail + "/" + requestData.alias);
  }

}
