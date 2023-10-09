import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {SubStepExamModel} from "../../../models/question.model";
import {ResultExamRequest} from "./resultExam.request";
import {ResultExamModel} from "../../../models/resultExam.model";

@Injectable({
    providedIn: 'root'
})

export class ResultExamService {
    private _http = inject(HttpClient)

    getResultExam(req: ResultExamRequest) {
        return this._http.get<ResponseData<ResultExamModel>>(environment.baseUrl + APIRoutesName.getResultExam + "/" + req.sub_step_id + "/" + req.locale_id);
    }

}
