import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Question} from "../../../models/question.model";
import {GetMySavedQuestionByIdRequest} from "./getMySavedQuestionById.request";

@Injectable({
    providedIn: 'root'
})

export class GetMySavedQuestionByIdService {
    private _http = inject(HttpClient)

    getMySavedQuestionById(requestData: GetMySavedQuestionByIdRequest): Observable<ResponseData<Question>> {
        let httpParams = new HttpParams();
        return this._http.get<ResponseData<Question>>(environment.baseUrl + APIRoutesName.getMySavedQuestionById + "/" + requestData.id.toString(),{params:httpParams});
    }

}
