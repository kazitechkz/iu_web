import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetCareerQuizzesRequest} from "./getCareerQuizzes.request";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

@Injectable({
  providedIn: 'root'
})

export class GetCareerQuizzesService {
  private _http = inject(HttpClient)
  getCareerQuizzes(requestData:GetCareerQuizzesRequest): Observable<ResponseData<Pagination<CareerQuiz[]>>> {
    let formData = new HttpParams();
    if(requestData.page){
      formData = formData.append("page",requestData.page.toString());
    }
    return this._http.get<ResponseData<Pagination<CareerQuiz[]>>>(environment.baseUrl + APIRoutesName.getCareerQuizzes,{params:formData});
  }

}
