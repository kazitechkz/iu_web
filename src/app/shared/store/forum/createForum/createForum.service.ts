import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";
import {CreateForumRequest} from "./createForum.request";

@Injectable({
  providedIn: 'root'
})

export class CreateForumService {
  private _http = inject(HttpClient)

  createForum(requestData:CreateForumRequest): Observable<ResponseData<Forum>> {
    let formData = new FormData();
    formData.append("subject_id",requestData.subject_id.toString());
    formData.append("attachment",requestData.attachment);
    formData.append("text",requestData.text);
    return this._http.post<ResponseData<Forum>>(environment.baseUrl + APIRoutesName.forumCreate,formData);
  }

}
