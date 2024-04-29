import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {SurveyModel} from "../../models/survey.model";
import {SurveyRequest} from "./survey.request";

@Injectable({
  providedIn: 'root'
})

export class SurveyService {
  private _http = inject(HttpClient)

  getSurveys(locale_id: number): Observable<ResponseData<SurveyModel>> {
    return this._http.get<ResponseData<SurveyModel>>(environment.baseUrl + APIRoutesName.getSurveys + '/' + locale_id);
  }

  answerSurveys(req: SurveyRequest): Observable<ResponseData<boolean>> {
    return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.answerSurveys, req);
  }

}
