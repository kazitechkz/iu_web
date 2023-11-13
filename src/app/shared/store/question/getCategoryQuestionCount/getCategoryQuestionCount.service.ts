import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetCategoryQuestionCountRequest} from "./getCategoryQuestionCount.request";
import {GetCategoryQuestionCountModel} from "./getCategoryQuestionCount.model";

@Injectable({
    providedIn: 'root'
})

export class GetCategoryQuestionCountService {
    private _http = inject(HttpClient)

    getCategoryQuestionCount(requestData: GetCategoryQuestionCountRequest): Observable<ResponseData<GetCategoryQuestionCountModel>> {
        let formData = new FormData();
        formData.append("locale_id",requestData.locale_id.toString());
        formData.append("category_id",requestData.category_id.toString());

        return this._http.post<ResponseData<GetCategoryQuestionCountModel>>(environment.baseUrl + APIRoutesName.getCategoryQuestionCount,formData);
    }

}
