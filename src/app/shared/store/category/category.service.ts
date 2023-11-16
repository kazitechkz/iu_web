import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../response_data";
import {Me} from "../../models/user.model";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";
import {Subject} from "../../models/subject.model";
import {CategoryModel} from "../../models/category.model";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private _http = inject(HttpClient)

  getCategories(subjectID: number, localeID?: number): Observable<ResponseData<CategoryModel[]>> {
    return this._http.get<ResponseData<CategoryModel[]>>(environment.baseUrl + APIRoutesName.getCategories + '/' + subjectID + '/' + localeID);
  }

}
