import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetMyAppealQuestionByIdRequest} from "./getMyAppealQuestionById.request";
import {Appeal} from "../../../models/appeal.model";

@Injectable({
    providedIn: 'root'
})

export class GetMyAppealQuestionByIdService {
    private _http = inject(HttpClient)

    getMyAppealQuestionById(requestData: GetMyAppealQuestionByIdRequest): Observable<ResponseData<Appeal>> {
        let httpParams = new HttpParams();

        return this._http.get<ResponseData<Appeal>>(environment.baseUrl + APIRoutesName.getMyAppealQuestionById + "/" + requestData.id.toString(),{params:httpParams});
    }

}
