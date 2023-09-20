import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./RegisterRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  http = inject(HttpClient);
  RegisterUser(requestData:RegisterRequest): Observable<ResponseData<boolean>> {
    return this.http.post<ResponseData<boolean>>("http://127.0.0.1:8000/api/auth/register",requestData);
  }


}
