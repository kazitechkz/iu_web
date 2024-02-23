import {DestroyRef, inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {SessionService} from "../shared/services/session.service";
import {LocalKeysConstants} from "../core/constants/local-keys.constants";
import {Router} from "@angular/router";
import {RoutesName} from "../core/constants/routes.constants";
import {FormGroup} from "@angular/forms";
import {RegisterRequest} from "../shared/store/auth/register/RegisterRequest";
import {registerAction} from "../shared/store/auth/register/Register.action";
import {getRegisterState} from "../shared/store/auth/register/Register.selector";
import {autoUnsubscribe} from "../core/helpers/autoUnsubscribe";
import {RegisterState} from "../shared/store/auth/register/Register.state";
import {Store} from "@ngrx/store";
import {AuthInfo} from "../shared/store/auth/login/loginRequest";
import {Me} from "../shared/models/user.model";
import {TwNotification} from "ng-tw";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private _session = inject(SessionService)
  private _router = inject(Router)
  private store = inject(Store)
  destroyRef = inject(DestroyRef);
  private _localStorage = inject(SessionService);
  private _route = inject(Router);
  private _notification = inject(TwNotification)
  logout() {
    this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
    this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
    this._router.navigateByUrl(RoutesName.loginRoute).then(null)
  }

  saveDataToStorage(data: AuthInfo | null) {
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
