import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetForumDiscussModel} from "./getForumDiscuss.model";
import {GetForumDiscussRequest} from "./getForumDiscuss.request";

@Injectable({
  providedIn: 'root'
})

export class GetForumDiscussService {
  private _http = inject(HttpClient)

  getForumDiscussByForumId(requestData:GetForumDiscussRequest): Observable<ResponseData<GetForumDiscussModel>> {
    let httpParams = new HttpParams();
    if(requestData.type){
      httpParams = httpParams.append("type",requestData.type.toString());
    }
    if(requestData.page){
      httpParams = httpParams.append("page",requestData.page.toString());
    }
    return this._http.get<ResponseData<GetForumDiscussModel>>(environment.baseUrl + APIRoutesName.getForumDiscuss + "/" + requestData.forum_id.toString(),{params:httpParams});
  }

}
