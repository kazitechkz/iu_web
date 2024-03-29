import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetCareerQuizGroupListModel} from "./getCareerQuizGroupList.model";

@Injectable({
  providedIn: 'root'
})

export class GetCareerQuizGroupListService {
  private _http = inject(HttpClient)
  getCareerQuizGroupList(): Observable<ResponseData<GetCareerQuizGroupListModel>> {
    return this._http.get<ResponseData<GetCareerQuizGroupListModel>>(environment.baseUrl + APIRoutesName.getCareerQuizGroupList);
  }

}
