import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AnswerRequest} from "./answer.request";
import {AnswerResult} from "../../../models/answerResult.model";

@Injectable({
  providedIn: 'root'
})

export class AnswerService {
  private _http = inject(HttpClient)

  answer(data:AnswerRequest): Observable<ResponseData<AnswerResult>> {
    return this._http.post<ResponseData<AnswerResult>>(environment.baseUrl + APIRoutesName.answer,data);
  }

}
