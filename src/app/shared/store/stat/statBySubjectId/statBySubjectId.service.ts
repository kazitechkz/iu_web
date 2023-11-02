import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {StatBySubjectIdModel} from "./statBySubjectId.action.model";

@Injectable({
  providedIn: 'root'
})

export class StatBySubjectIdService {
  private _http = inject(HttpClient)

  getStatBySubjectId(id:number): Observable<ResponseData<StatBySubjectIdModel>> {
    return this._http.get<ResponseData<StatBySubjectIdModel>>(environment.baseUrl + APIRoutesName.statBySubjectId + "/" + id.toString());
  }

}
