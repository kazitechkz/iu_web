import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {GetLearningPlanModel} from "./getLearningPlan.model";

@Injectable({
  providedIn: 'root'
})

export class GetLearningPlanService {
  private _http = inject(HttpClient)

  getLearningPlan(): Observable<ResponseData<GetLearningPlanModel>> {
    return this._http.get<ResponseData<GetLearningPlanModel>>(environment.baseUrl + APIRoutesName.getLearningPlan);
  }

}
