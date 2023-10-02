import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {StepModel, Steps} from "../../../models/step.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {StepDetailRequest} from "./stepDetail.request";

@Injectable({
    providedIn: 'root'
})

export class StepDetailService {
    private _http = inject(HttpClient)

    getStepDetail(id: StepDetailRequest): Observable<ResponseData<Steps[]>> {
        return this._http.get<ResponseData<Steps[]>>(environment.baseUrl + APIRoutesName.getStepDetail + "/" + id);
    }

}
