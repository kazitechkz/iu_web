import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Information} from "../../../models/information.model";

@Injectable({
  providedIn: 'root'
})

export class GetInformationService {
  private _http = inject(HttpClient)

  getInformation(requestData:string): Observable<ResponseData<Information>> {
    return this._http.get<ResponseData<Information>>(environment.baseUrl + APIRoutesName.getInformation + "/" + requestData);
  }

}
