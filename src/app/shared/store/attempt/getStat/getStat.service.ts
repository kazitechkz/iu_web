import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Attempt} from "../../../models/attempt.model";

@Injectable({
  providedIn: 'root'
})

export class GetStatService {
  private _http = inject(HttpClient)

  getAttemptStat(id:any): Observable<ResponseData<Attempt>> {
    return this._http.get<ResponseData<Attempt>>(environment.baseUrl + APIRoutesName.getStatAttemptById + "/" + id.toString());
  }

}
