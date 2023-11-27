import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {GetMyTechSupportTicketsRequest} from "./getMyTechSupportTickets.request";
import {Pagination} from "../../pagination";

@Injectable({
  providedIn: 'root'
})

export class GetMyTechSupportTicketsService {
  private _http = inject(HttpClient)

  getMyTechSupportTickets(requestData:GetMyTechSupportTicketsRequest): Observable<ResponseData<Pagination<TechSupportTicket[]>>> {
    let httpParams = new HttpParams();
    if(requestData.page){
      httpParams = httpParams.append("page",requestData.page);
    }
    if(requestData.is_answered !== null){
      httpParams = httpParams.append("is_answered",requestData.is_answered);
    }
    if(requestData.is_resolved !== null){
      httpParams = httpParams.append("is_resolved",requestData.is_resolved);
    }
    if(requestData.is_closed !== null){
      httpParams = httpParams.append("is_closed",requestData.is_closed);
    }
    if(requestData.type_id){
      httpParams = httpParams.append("type_id",requestData.type_id.toString());
    }
    if(requestData.category_id){
      httpParams = httpParams.append("category_id",requestData.category_id);
    }
    if(requestData.search){
      httpParams = httpParams.append("search",requestData.search.toString());
    }
    return this._http.get<ResponseData<Pagination<TechSupportTicket[]>>>(environment.baseUrl + APIRoutesName.getMyTechSupportTickets,{params:httpParams});
  }

}
