import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetForumModel} from "./getForum.model";

@Injectable({
  providedIn: 'root'
})

export class GetForumService {
  private _http = inject(HttpClient)

  getForumById(requestData:number): Observable<ResponseData<GetForumModel>> {
    return this._http.get<ResponseData<GetForumModel>>(environment.baseUrl + APIRoutesName.getForum + "/" + requestData.toString());
  }

}
