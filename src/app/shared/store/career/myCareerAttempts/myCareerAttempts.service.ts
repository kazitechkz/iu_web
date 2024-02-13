import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {MyCareerAttemptsRequest} from "./myCareerAttempts.request";
import {Pagination} from "../../pagination";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

@Injectable({
  providedIn: 'root'
})

export class MyCareerAttemptsService {
  private _http = inject(HttpClient)
  myCareerAttemptsService(requestData:MyCareerAttemptsRequest): Observable<ResponseData<Pagination<CareerQuizAttempt[]>>> {
    let formData = new HttpParams();
    if(requestData.page){
      formData = formData.append("page",requestData.page.toString());
    }
    return this._http.get<ResponseData<Pagination<CareerQuizAttempt[]>>>(environment.baseUrl + APIRoutesName.myCareerAttempts,{params:formData});
  }

}
