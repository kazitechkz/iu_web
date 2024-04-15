import {DestroyRef, inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {SessionService} from "../shared/services/session.service";
import {LocalKeysConstants} from "../core/constants/local-keys.constants";
import {Router} from "@angular/router";
import {RoutesName} from "../core/constants/routes.constants";
import {Store} from "@ngrx/store";
import {AuthInfo} from "../shared/store/auth/login/loginRequest";
import {Me} from "../shared/models/user.model";
import {TwNotification} from "ng-tw";
import {marked} from "marked";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import Swal from "sweetalert2";
import {Observable} from "rxjs";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private socialService = inject(SocialAuthService)
  private _session = inject(SessionService)
  private _router = inject(Router)
  private store = inject(Store)
  destroyRef = inject(DestroyRef);
  private _localStorage = inject(SessionService);
  private _route = inject(Router);
  private _notification = inject(TwNotification)
  logout() {
    let user = this._localStorage.getDataFromLocalStorage(LocalKeysConstants.user)
    if (user.isKundelik) {
      this.backgroundAction()
    }
    if (user.isGoogle) {
      this.socialService.signOut()
    }
    this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
    this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
    this._router.navigateByUrl(RoutesName.loginRoute).then(null)
  }

  private backgroundAction() {
    // console.log(this._localStorage.getDataFromLocalStorage('kundelik_token'))
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._localStorage.getDataFromLocalStorage('kundelik_token'));
    // // Create a new HttpRequest instance directly without going through interceptors
    // const request = new HttpRequest('GET', 'https://login.kundelik.kz/logout', {
    //   headers: headers,
    //   responseType: 'json'
    // });
    // this.http.request(request);
  }

  saveDataToStorage(data: AuthInfo | null) {
    if (data?.isFirst) {
      Swal.fire({
        title: "Ура!",
        text: "За вашу регистрацию было начислено 1000 iU-coins!",
        icon: "success"
      })
    }
    if (data?.role == 'student') {
      this._notification.show({type: 'success', title: 'Success', text: 'Добро пожаловать!'});
      this._localStorage.setDataToLocalStorage(LocalKeysConstants.token, data?.token as string)
      this._localStorage.setDataToLocalStorage(LocalKeysConstants.user, data?.user as Me)
      this._route.navigate([RoutesName.dashboard]).then(r => console.log('Navigated to dashboard'))
    } else if (data?.role == 'teacher') {
      this._notification.show({type: 'success', title: 'Success', text: 'Добро пожаловать!'});
      this._localStorage.setDataToLocalStorage(LocalKeysConstants.token, data?.token as string)
      this._localStorage.setDataToLocalStorage(LocalKeysConstants.user, data?.user as Me)
      this._route.navigate([RoutesName.teacher]).then(r => console.log('Navigated to teacher dashboard'))
    } else {
      this._notification.show({type: 'danger', title: 'Error', text: 'Account doesn\'t exist'});
      this._route.navigate([RoutesName.loginRoute]).then(r => console.log('Navigated to login page'))
    }
  }
}
