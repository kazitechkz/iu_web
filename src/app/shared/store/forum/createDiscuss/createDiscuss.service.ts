import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";
import {CreateDiscussRequest} from "./createDiscuss.request";
import {DiscussRating} from "../../../models/discussRating.model";
import {Discuss} from "../../../models/discuss.model";

@Injectable({
  providedIn: 'root'
})

export class CreateDiscussService {
  private _http = inject(HttpClient)

  createDiscuss(requestData:CreateDiscussRequest): Observable<ResponseData<Discuss>> {
    let formData = new FormData();
      formData.append("forum_id",requestData.forum_id.toString());
      formData.append("text",requestData.text.toString());
    return this._http.post<ResponseData<Discuss>>(environment.baseUrl + APIRoutesName.createDiscuss,formData);
  }

}
