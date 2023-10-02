import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {Subject} from "../../models/subject.model";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {StepModel} from "../../models/step.model";

@Injectable({
    providedIn: 'root'
})

export class StepService {
    private _http = inject(HttpClient)

    getSteps(): Observable<ResponseData<StepModel[]>> {
        return this._http.get<ResponseData<StepModel[]>>(environment.baseUrl + APIRoutesName.getSteps);
    }

}
