import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Subject} from "../../../models/subject.model";

@Injectable({
  providedIn: 'root'
})

export class GetMySubjectsService {
  private _http = inject(HttpClient)

  getMySubjects(): Observable<ResponseData<Subject[]>> {
    return this._http.get<ResponseData<Subject[]>>(environment.baseUrl + APIRoutesName.getMySubjects);
  }

}
