import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";

@Injectable({
  providedIn: 'root'
})

export class GetUntPlanService {
  private _http = inject(HttpClient)

  getUntPlan(): Observable<ResponseData<Plan[]>> {
    return this._http.get<ResponseData<Plan[]>>(environment.baseUrl + APIRoutesName.getUntPlan);
  }

}
