import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {News} from "../../../models/news.model";

@Injectable({
  providedIn: 'root'
})

export class GetSingleNewsService {
  private _http = inject(HttpClient)

  getSingleNews(requestData:any): Observable<ResponseData<News>> {
    return this._http.get<ResponseData<News>>(environment.baseUrl + APIRoutesName.getSingleNews + '/' +requestData.toString());
  }

}
