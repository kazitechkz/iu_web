import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {Me} from "../../models/user.model";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {Subject} from "../../models/subject.model";

@Injectable({
  providedIn: 'root'
})

export class SubjectService{
  private _http = inject(HttpClient)

  getSubjects(): Observable<ResponseData<Subject[]>> {
    return this._http.get<ResponseData<Subject[]>>(environment.baseUrl + APIRoutesName.getSubjects);
  }

}
