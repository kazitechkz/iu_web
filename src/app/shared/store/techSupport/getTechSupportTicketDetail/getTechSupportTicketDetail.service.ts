import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {GetTechSupportTicketDetailRequest} from "./getTechSupportTicketDetail.request";
import {GetTechSupportTicketDetailModel} from "./getTechSupportTicketDetail.model";

@Injectable({
  providedIn: 'root'
})

export class GetTechSupportTicketDetailService {
  private _http = inject(HttpClient)

  getTechSupportTicketDetail(requestData:GetTechSupportTicketDetailRequest): Observable<ResponseData<GetTechSupportTicketDetailModel>> {
    let params = new HttpParams();
    if(requestData.page){
      params = params.append("page",requestData.page.toString());
    }
    return this._http.get<ResponseData<GetTechSupportTicketDetailModel>>(environment.baseUrl + APIRoutesName.getTechSupportTicketDetail + "/" + requestData.ticket_id.toString(),{params:params});
  }

}
