import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {UntStatModel} from "../../../models/untStat.model";

@Injectable({
  providedIn: 'root'
})

export class GetUntStatService {
  private _http = inject(HttpClient)

  getUntStat(): Observable<ResponseData<UntStatModel>> {
    return this._http.get<ResponseData<UntStatModel>>(environment.baseUrl + APIRoutesName.getUntStat);
  }

}
