import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {SubCategoryModel} from "../../../models/subCategory.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
  providedIn: 'root'
})

export class SubCategoryService {
  private _http = inject(HttpClient)

  getSubCategories(categoryID: number, localeID?: number): Observable<ResponseData<SubCategoryModel[]>> {
    return this._http.get<ResponseData<SubCategoryModel[]>>(environment.baseUrl + APIRoutesName.getSubCategories + '/' + categoryID + '/' + localeID);
  }

}
