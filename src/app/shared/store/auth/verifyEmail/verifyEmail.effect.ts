import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {VerifyEmailService} from "./verifyEmail.service";
import {catchError, of, switchMap} from "rxjs";
import {verifyActionFailure, verifyActionSuccess, verifyEmailAction} from "./verifyEmail.action";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";
import {Me} from "../../../models/user.model";

@Injectable()
export class VerifyEmailEffect {

  private _service = inject(VerifyEmailService);
  private action$ = inject(Actions);
  private _localStorage = inject(SessionService);
  private _route = inject(Router);
  private _notification = inject(TwNotification)
  private _authService = inject(AuthService)

  _onVerifyEmail = createEffect((): any =>
    this.action$.pipe(
      ofType(verifyEmailAction),
      switchMap((action) => {
        return this._service.verifyUser(action.requestData).pipe(
          switchMap(data => {
              return of(
                verifyActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(verifyActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );


}
