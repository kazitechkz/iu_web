import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "./login.service";
import {catchError, of, switchMap} from "rxjs";
import {loginAction, loginActionFailure, loginActionSuccess} from "./login.action";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";

@Injectable()
export class LoginEffect {

  private _service = inject(LoginService);
  private action$ = inject(Actions);
  private _notification = inject(TwNotification)
  private _authService = inject(AuthService)

  _onLogin = createEffect((): any =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap((action) => {
        return this._service.loginUser(action.requestData).pipe(
          switchMap(data => {
            if (data.data?.redirectURL.trim().length === 0) {
              this._authService.saveDataToStorage(data.data)
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
