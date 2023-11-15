import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {FindUserByEmailRequest} from "./findUserByEmail.request";
import {findUserByEmailAction} from "./findUserByEmail.action";
import {OrdinaryUser} from "../../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class FindUserByEmailService {
  private _http = inject(HttpClient)

  findUserByEmail(requestData:FindUserByEmailRequest): Observable<ResponseData<OrdinaryUser>> {
    let formData = new FormData();
    formData.append("email",requestData.email.toString());
    return this._http.post<ResponseData<OrdinaryUser>>(environment.baseUrl + APIRoutesName.findUserByEmail,formData);
  }

}
