import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
  providedIn: 'root'
})

export class AppealTypesService {
  private _http = inject(HttpClient)

  getAppealTypes(): Observable<ResponseData<AppealType[]>> {
    return this._http.get<ResponseData<AppealType[]>>(environment.baseUrl + APIRoutesName.appealTypes);
  }

}
