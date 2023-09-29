import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map, of, ReplaySubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "../shared/services/session.service";
import {LocalKeysConstants} from "../core/constants/local-keys.constants";
import {Router} from "@angular/router";
import {RoutesName} from "../core/constants/routes.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private _http = inject(HttpClient)
  private _session = inject(SessionService)
  private _router = inject(Router)

  logout() {
    this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
    this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
    this._router.navigateByUrl(RoutesName.loginRoute).then(null);
  }
}
