import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AnswerResult} from "../../../models/answerResult.model";
import {AnsweredResult} from "./answeredResult";
import {AnsweredResultRequest} from "./answerResult.request";

@Injectable({
  providedIn: 'root'
})

export class AnsweredResultService {
  private _http = inject(HttpClient)

  getResult(data:AnsweredResultRequest): Observable<ResponseData<AnsweredResult>> {
    return this._http.get<ResponseData<AnsweredResult>>(environment.baseUrl + APIRoutesName.answerResult + "/" + data.attempt_subject_id.toString());
  }

}
