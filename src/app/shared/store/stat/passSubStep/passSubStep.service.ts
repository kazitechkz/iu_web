import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {PassSubStepRequest} from "./passSubStep.request";
import {SubStepModel} from "../../../models/subStep.model";

@Injectable({
  providedIn: 'root'
})

export class PassSubStepService {
  private _http = inject(HttpClient)

  findSubStepBySubCategoryId(requestData: PassSubStepRequest): Observable<ResponseData<SubStepModel[]>> {
    return this._http.post<ResponseData<SubStepModel[]>>(environment.baseUrl + APIRoutesName.findSubStepBySubCategoryId, requestData);
  }

}
