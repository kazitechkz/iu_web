import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";
import {RatingForumRequest} from "./ratingForum.request";
import {DiscussRating} from "../../../models/discussRating.model";

@Injectable({
  providedIn: 'root'
})

export class RatingForumService {
  private _http = inject(HttpClient)

  ratingForum(requestData:RatingForumRequest): Observable<ResponseData<DiscussRating>> {
    let formData = new FormData();
    if(requestData.rating){
      formData.append("rating",requestData.rating.toString());
    }
    if(requestData.discuss_id){
      formData.append("discuss_id",requestData.discuss_id.toString());
    }
    if(requestData.forum_id){
      formData.append("forum_id",requestData.forum_id.toString());
    }
    return this._http.post<ResponseData<DiscussRating>>(environment.baseUrl + APIRoutesName.ratingForum,formData);
  }

}
