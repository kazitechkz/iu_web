import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {Subject} from "../../models/subject.model";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {StepModel} from "../../models/step.model";
import {FactModel} from "../../models/fact.model";

@Injectable({
    providedIn: 'root'
})

export class FactService {
    private _http = inject(HttpClient)

    getFacts(subjectID:number): Observable<ResponseData<FactModel>> {
        return this._http.get<ResponseData<FactModel>>(environment.baseUrl + APIRoutesName.getFacts + '/' + subjectID);
    }

}
