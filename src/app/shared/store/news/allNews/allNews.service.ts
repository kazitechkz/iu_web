import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {News} from "../../../models/news.model";
import {AllNewsRequest} from "./allNews.request";
import {Pagination} from "../../pagination";

@Injectable({
  providedIn: 'root'
})

export class AllNewsService {
  private _http = inject(HttpClient)

  allNews(requestData:AllNewsRequest): Observable<ResponseData<Pagination<News[]>>> {
    let params = new HttpParams();
    params = params.append("page",requestData.page.toString());
    return this._http.get<ResponseData<Pagination<News[]>>>(environment.baseUrl + APIRoutesName.getAllNews,{params});
  }

}
