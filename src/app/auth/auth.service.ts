import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map, of, ReplaySubject} from "rxjs";
import {UserInfo} from "../shared/models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "../shared/services/session.service";
import {LocalKeysConstants} from "../core/constants/local-keys.constants";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private currentUserSource = new ReplaySubject<UserInfo>(1);
  currentUser$ = this.currentUserSource.asObservable();
  private _http = inject(HttpClient)
  private _session = inject(SessionService)
  private _router = inject(Router)

  logout() {
    this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
    this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
    //@ts-ignore
    this.currentUserSource.next(null);
    this._router.navigateByUrl('/').then(r => console.log());
  }
}
