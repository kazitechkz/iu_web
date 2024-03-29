import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetCareerQuizModel} from "./getCareerQuiz.model";

@Injectable({
  providedIn: 'root'
})

export class GetCareerQuizService {
  private _http = inject(HttpClient)
  getCareerQuiz(id:number): Observable<ResponseData<GetCareerQuizModel>> {
    return this._http.get<ResponseData<GetCareerQuizModel>>(environment.baseUrl + APIRoutesName.getCareerQuizDetail + "/" + id.toString());
  }

}
