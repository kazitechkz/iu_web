import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateTechSupportMessageRequest} from "./createTechSupportMessage.request";
import {TechSupportMessage} from "../../../models/techSupportMessage.model";


@Injectable({
  providedIn: 'root'
})

export class CreateTechSupportMessageService {
  private _http = inject(HttpClient)

  createTechSupportMessage(requestData:CreateTechSupportMessageRequest): Observable<ResponseData<TechSupportMessage>> {
    return this._http.post<ResponseData<TechSupportMessage>>(environment.baseUrl + APIRoutesName.createTechSupportMessage,requestData);
  }

}
