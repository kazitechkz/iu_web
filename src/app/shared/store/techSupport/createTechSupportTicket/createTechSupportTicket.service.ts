import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {CreateTechSupportTicketRequest} from "./createTechSupportTicket.request";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";


@Injectable({
  providedIn: 'root'
})

export class CreateTechSupportTicketService {
  private _http = inject(HttpClient)

  createTechSupportTicket(requestData:CreateTechSupportTicketRequest): Observable<ResponseData<TechSupportTicket>> {
    return this._http.post<ResponseData<TechSupportTicket>>(environment.baseUrl + APIRoutesName.createTechSupportTicket,requestData);
  }

}
