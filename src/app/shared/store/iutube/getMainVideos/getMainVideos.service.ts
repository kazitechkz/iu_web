import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMainVideosModel} from "./getMainVideos.model";

@Injectable({
  providedIn: 'root'
})

export class GetMainVideosService {
  private _http = inject(HttpClient)

  getMainVideos(): Observable<ResponseData<GetMainVideosModel>> {
    return this._http.get<ResponseData<GetMainVideosModel>>(environment.baseUrl + APIRoutesName.getMainVideos);
  }

}
