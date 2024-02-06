import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {Subject} from "../../../models/subject.model";

@Injectable({
  providedIn: 'root'
})

export class CheckPlanUNTService {
  private _http = inject(HttpClient)

  checkPlanUNT(): Observable<ResponseData<number[]>> {
    return this._http.get<ResponseData<number[]>>(environment.baseUrl + APIRoutesName.checkPlanUNT);
  }

}
