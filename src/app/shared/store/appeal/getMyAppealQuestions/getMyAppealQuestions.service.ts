import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMyAppealQuestionsRequest} from "./getMyAppealQuestions.request";
import {Pagination} from "../../pagination";
import {Question} from "../../../models/question.model";
import {Appeal} from "../../../models/appeal.model";

@Injectable({
    providedIn: 'root'
})

export class GetMyAppealQuestionsService {
    private _http = inject(HttpClient)

    getMyAppealQuestions(requestData: GetMyAppealQuestionsRequest): Observable<ResponseData<Pagination<Appeal[]>>> {
        let httpParams = new HttpParams();
        if(requestData.page){
          httpParams = httpParams.append("page",requestData.page.toString())
        }
        return this._http.get<ResponseData<Pagination<Appeal[]>>>(environment.baseUrl + APIRoutesName.getMyAppealQuestions,{params:httpParams});
    }

}
