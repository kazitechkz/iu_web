import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AnsweredResultRequest} from "../answeredResult/answerResult.request";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {AnsweredResult} from "../answeredResult/answeredResult";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {GetFiftyFiftyRequest} from "./getFiftyFifty.request";
import {GetFiftyFiftyModel} from "./getFiftyFifty.model";

@Injectable({
  providedIn: 'root'
})

export class GetFiftyFiftyService {
  private _http = inject(HttpClient)

  getFiftyFifty(data:GetFiftyFiftyRequest): Observable<ResponseData<GetFiftyFiftyModel>> {
    return this._http.get<ResponseData<GetFiftyFiftyModel>>(environment.baseUrl + APIRoutesName.getFiftyFifty + "/" + data.questionId.toString());
  }

}
