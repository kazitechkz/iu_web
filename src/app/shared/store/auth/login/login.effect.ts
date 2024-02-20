import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "./login.service";
import {catchError, of, switchMap} from "rxjs";
import {loginAction, loginActionFailure, loginActionSuccess} from "./login.action";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";
import {Me} from "../../../models/user.model";

@Injectable()
export class LoginEffect {

  private _service = inject(LoginService);
  private action$ = inject(Actions);
  private _localStorage = inject(SessionService);
  private _route = inject(Router);
  private _notification = inject(TwNotification)
  private _authService = inject(AuthService)

  _onLogin = createEffect((): any =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap((action) => {
        return this._service.loginUser(action.requestData).pipe(
          switchMap(data => {
            if (data.data?.redirectURL.trim().length === 0) {
              if (data.data?.role == 'student') {
                this._notification.show({type: 'success', title: 'Success', text: 'Добро пожаловать!'});
                this._localStorage.setDataToLocalStorage(LocalKeysConstants.token, data.data?.token as string)
                this._localStorage.setDataToLocalStorage(LocalKeysConstants.user, data.data?.user as Me)
                this._route.navigate([RoutesName.dashboard]).then(r => console.log('Navigated to dashboard'))
              } else if (data.data?.role == 'teacher') {
                this._notification.show({type: 'success', title: 'Success', text: 'Добро пожаловать!'});
                this._localStorage.setDataToLocalStorage(LocalKeysConstants.token, data.data?.token as string)
                this._localStorage.setDataToLocalStorage(LocalKeysConstants.user, data.data?.user as Me)
                this._route.navigate([RoutesName.teacher]).then(r => console.log('Navigated to teacher dashboard'))
              } else {
                this._notification.show({type: 'danger', title: 'Error', text: 'Account doesn\'t exist'});
                this._route.navigate([RoutesName.loginRoute]).then(r => console.log('Navigated to login page'))
              }
              return of(
                loginActionSuccess({responseData: data}),
              )
            } else {
              this._notification.show({type: 'danger', title: 'Error', text: 'Email is not verified!'});
              window.location.href = data.data?.redirectURL!
              return of()
              }
            }
          ),
          catchError((_error) =>
            of(loginActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );


}
