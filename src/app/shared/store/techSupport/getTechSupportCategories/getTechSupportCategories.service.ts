import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";

@Injectable({
  providedIn: 'root'
})

export class GetTechSupportCategoriesService {
  private _http = inject(HttpClient)

  getTechSupportCategories(): Observable<ResponseData<TechSupportCategory[]>> {
    return this._http.get<ResponseData<TechSupportCategory[]>>(environment.baseUrl + APIRoutesName.getTechSupportCategories);
  }

}
