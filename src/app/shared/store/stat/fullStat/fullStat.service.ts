import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {FullStatModel} from "./fullStat.model";
import {FullStatRequest} from "./fullStat.request";

@Injectable({
  providedIn: 'root'
})

export class FullStatService {
  private _http = inject(HttpClient)

  fullStat(requestData:FullStatRequest): Observable<ResponseData<FullStatModel>> {
    let httpParams = new HttpParams();
    if(requestData.type_id){
      httpParams = httpParams.append("type_id",requestData.type_id.toString());
    }
    if(requestData.subject_id){
      httpParams = httpParams.append("subject_id",requestData.subject_id.toString());
    }
    if(requestData.start_at){
      httpParams = httpParams.append("start_at",requestData.start_at.toString());
    }
    if(requestData.end_at){
      httpParams = httpParams.append("end_at",requestData.end_at.toString());
    }
    return this._http.get<ResponseData<FullStatModel>>(environment.baseUrl + APIRoutesName.fullStat,{params:httpParams});
  }

}
