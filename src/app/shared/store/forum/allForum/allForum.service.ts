import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AllForumRequest} from "./allForum.request";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";

@Injectable({
  providedIn: 'root'
})

export class AllForumService {
  private _http = inject(HttpClient)

  allForumService(requestData:AllForumRequest): Observable<ResponseData<Pagination<Forum[]>>> {
    let formData = new HttpParams();
    if(requestData.page){
      formData = formData.append("page",requestData.page.toString());
    }
    if(requestData.subject_id){
      formData = formData.append("subject_id",requestData.subject_id.toString());
    }
    if(requestData.type){
      formData = formData.append("type",requestData.type.toString());
    }
    return this._http.get<ResponseData<Pagination<Forum[]>>>(environment.baseUrl + APIRoutesName.allForum,{params:formData});
  }

}
