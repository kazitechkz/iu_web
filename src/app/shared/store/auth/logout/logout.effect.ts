import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LogoutService} from "./logout.service";
import {catchError, of, switchMap} from "rxjs";
import {logoutAction, LogoutActionFailure, LogoutActionSuccess} from "./logout.action";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";

@Injectable()
export class LogoutEffect {

  private _service = inject(LogoutService);
  private action$ = inject(Actions);
  private _notification = inject(TwNotification)
  private _authService = inject(AuthService)

  _onLogout = createEffect((): any =>
    this.action$.pipe(
      ofType(logoutAction),
      switchMap((action) => {
        return this._service.logoutUser().pipe(
          switchMap(data => {
              return of(
                LogoutActionSuccess(),
              )
            }
          ),
          catchError((_error) =>
            of(LogoutActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );


}
