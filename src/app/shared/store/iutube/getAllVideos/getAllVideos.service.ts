import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";
import {GetAllVideosRequest} from "./getAllVideos.request";

@Injectable({
  providedIn: 'root'
})

export class GetAllVideosService {
  private _http = inject(HttpClient)

  getAllVideos(requestData:GetAllVideosRequest): Observable<ResponseData<Pagination<IutubeVideo[]>>> {
    let httpParameters = new HttpParams();
    if(requestData.page){
      httpParameters = httpParameters.append("page",requestData.page.toString())
    }
    if(requestData.subject_id){
      httpParameters = httpParameters.append("subject_id",requestData.subject_id.toString())
    }
    if(requestData.locale_id){
      httpParameters =  httpParameters.append("locale_id",requestData.locale_id.toString())
    }
    if(requestData.search){
      httpParameters =  httpParameters.append("search",requestData.search.toString())
    }
    return this._http.get<ResponseData<Pagination<IutubeVideo[]>>>(environment.baseUrl + APIRoutesName.getAllVideos,{params:httpParameters});
  }

}
