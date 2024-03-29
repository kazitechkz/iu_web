import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

@Injectable({
  providedIn: 'root'
})

export class PassCareerQuizService {
  private _http = inject(HttpClient)
  passCareerQuiz(id:number): Observable<ResponseData<CareerQuiz>> {
    return this._http.get<ResponseData<CareerQuiz>>(environment.baseUrl + APIRoutesName.passCareerQuiz + "/" + id.toString());
  }

}
