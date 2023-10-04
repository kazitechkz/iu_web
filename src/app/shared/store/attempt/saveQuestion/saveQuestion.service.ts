import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {SaveQuestionRequest} from "./saveQuestion.request";

@Injectable({
  providedIn: 'root'
})

export class SaveQuestionService {
  private _http = inject(HttpClient)

  saveQuestion(data:SaveQuestionRequest): Observable<ResponseData<boolean>> {
    return this._http.get<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.saveQuestion + "/" + data.questionId.toString());
  }

}
