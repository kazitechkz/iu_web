import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {TechSupportType} from "../../../models/techSupportType.model";

@Injectable({
  providedIn: 'root'
})

export class GetTechSupportTypesService {
  private _http = inject(HttpClient)

  getTechSupportTypes(): Observable<ResponseData<TechSupportType[]>> {
    return this._http.get<ResponseData<TechSupportType[]>>(environment.baseUrl + APIRoutesName.getTechSupportTypes);
  }

}
