import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AttemptType} from "../../../models/attemptType.model";

@Injectable({
  providedIn: 'root'
})

export class AllAttemptTypesService {
  private _http = inject(HttpClient)

  allAttemptTypes(): Observable<ResponseData<AttemptType[]>> {
    return this._http.get<ResponseData<AttemptType[]>>(environment.baseUrl + APIRoutesName.allAttemptTypes);
  }

}
