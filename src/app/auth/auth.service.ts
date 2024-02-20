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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private _session = inject(SessionService)
  private _router = inject(Router)
  private store = inject(Store)
  destroyRef = inject(DestroyRef);
  logout() {
    this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
    this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
    this._router.navigateByUrl(RoutesName.loginRoute).then(null)
  }
}
