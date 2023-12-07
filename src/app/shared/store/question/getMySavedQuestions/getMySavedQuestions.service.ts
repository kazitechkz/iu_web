import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMySavedQuestionsRequest} from "./getMySavedQuestions.request";
import {Pagination} from "../../pagination";
import {Question} from "../../../models/question.model";

@Injectable({
    providedIn: 'root'
})

export class GetMySavedQuestionsService {
    private _http = inject(HttpClient)

    getMySavedQuestions(requestData: GetMySavedQuestionsRequest): Observable<ResponseData<Pagination<Question[]>>> {
        let httpParams = new HttpParams();
        if(requestData.page){
          httpParams = httpParams.append("page",requestData.page.toString())
        }
        return this._http.get<ResponseData<Pagination<Question[]>>>(environment.baseUrl + APIRoutesName.getMySavedQuestions,{params:httpParams});
    }

}
