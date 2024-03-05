import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {FinishAttemptModel} from "./finishAttempt.model";

@Injectable({
  providedIn: 'root'
})

export class FinishAttemptService {
  private _http = inject(HttpClient)

  finishAttempt(id:number): Observable<ResponseData<FinishAttemptModel>> {
    return this._http.get<ResponseData<FinishAttemptModel>>(environment.baseUrl + APIRoutesName.finishAttempt + "/" + id.toString());
  }

}
