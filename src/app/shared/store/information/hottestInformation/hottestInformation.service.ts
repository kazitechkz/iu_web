import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {HottestInformationModel} from "./hottestInformation.model";

@Injectable({
  providedIn: 'root'
})

export class HottestInformationService {
  private _http = inject(HttpClient)

  getHottestInformation(): Observable<ResponseData<HottestInformationModel>> {
    return this._http.get<ResponseData<HottestInformationModel>>(environment.baseUrl + APIRoutesName.hottestInformation);
  }

}
