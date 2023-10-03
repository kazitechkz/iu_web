import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Attempt} from "../../../models/attempt.model";
import {CreateAttemptRequest} from "./createAttempt.request";

@Injectable({
  providedIn: 'root'
})

export class CreateAttemptService {
  private _http = inject(HttpClient)

  createAttempt(data:CreateAttemptRequest): Observable<ResponseData<Attempt>> {
    return this._http.post<ResponseData<Attempt>>(environment.baseUrl + APIRoutesName.createAttempt,data);
  }

}
