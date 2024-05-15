import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ContentAppealRequest, SubStepRequest, SubStepResultRequest} from "./subStep.request";
import {SubStepModel} from "../../../models/subStep.model";

@Injectable({
    providedIn: 'root'
})

export class SubStepService {
    private _http = inject(HttpClient)

    getStepDetail(id: number): Observable<ResponseData<SubStepModel[]>> {
        return this._http.get<ResponseData<SubStepModel[]>>(environment.baseUrl + APIRoutesName.getSubSteps + "/" + id);
    }

    getSubStepDetail(id: SubStepRequest): Observable<ResponseData<SubStepModel>> {
      return this._http.get<ResponseData<SubStepModel>>(environment.baseUrl + APIRoutesName.getSubStep + "/" + id);
    }

    getSubStepResult(req: SubStepResultRequest): Observable<ResponseData<boolean>> {
      return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.getSubStepResult, {
        sub_step_id: req.sub_step_id,
        locale_id: req.locale_id
      });
    }
    createContentAppeal(req: ContentAppealRequest): Observable<ResponseData<boolean>> {
      return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.createContentAppeal, req);
    }

}
