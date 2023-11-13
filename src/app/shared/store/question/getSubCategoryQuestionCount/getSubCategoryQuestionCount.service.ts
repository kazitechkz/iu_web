import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetSubCategoryQuestionCountRequest} from "./getSubCategoryQuestionCount.request";
import {GetSubCategoryQuestionCountModel} from "./getSubCategoryQuestionCount.model";

@Injectable({
    providedIn: 'root'
})

export class GetSubCategoryQuestionCountService {
    private _http = inject(HttpClient)

    getSubCategoryQuestionCount(requestData: GetSubCategoryQuestionCountRequest): Observable<ResponseData<GetSubCategoryQuestionCountModel>> {
        let formData = new FormData();
        formData.append("locale_id",requestData.locale_id.toString());
        formData.append("sub_category_id",requestData.sub_category_id.toString());

        return this._http.post<ResponseData<GetSubCategoryQuestionCountModel>>(environment.baseUrl + APIRoutesName.getSubCategoryQuestionCount,formData);
    }

}
