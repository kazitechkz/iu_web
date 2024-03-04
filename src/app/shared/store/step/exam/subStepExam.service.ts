import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {SubStepExamModel} from "../../../models/question.model";
import {SubStepExamRequest} from "./subStepExam.request";

@Injectable({
    providedIn: 'root'
})

export class SubStepExamService {
    private _http = inject(HttpClient)

    getStepExam(req: SubStepExamRequest) {
        return this._http.get<ResponseData<SubStepExamModel[]>>(environment.baseUrl + APIRoutesName.getSubStepExam + "/" + req.sub_step_id + "/" + req.locale_id);
    }

    passStepExam(req: any) {
      return this._http.post<ResponseData<number>>(environment.baseUrl + APIRoutesName.passSubStepExam, req);
    }

}
