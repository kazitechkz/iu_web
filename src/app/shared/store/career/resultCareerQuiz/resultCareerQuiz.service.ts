import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

@Injectable({
  providedIn: 'root'
})

export class ResultCareerQuizService {
  private _http = inject(HttpClient)
  resultCareerQuiz(id:number): Observable<ResponseData<CareerQuizAttempt>> {
    return this._http.get<ResponseData<CareerQuizAttempt>>(environment.baseUrl + APIRoutesName.resultCareerQuiz + "/" + id.toString());
  }

}
