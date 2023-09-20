import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "./loginRequest";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  loginUser(requestData:LoginRequest): Observable<ResponseData<string>> {
    return this.http.post<ResponseData<string>>(environment.baseUrl+"auth/login",requestData);
  }

}
