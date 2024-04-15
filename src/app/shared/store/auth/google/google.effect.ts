import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GoogleService} from "./google.service";
import {catchError, of, switchMap} from "rxjs";
import {
  googleAction,
  GoogleActionSuccess,
  GoogleActionFailure
} from "./google.action";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {Me} from "../../../models/user.model";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class GoogleEffect {

  private _service = inject(GoogleService);
  private action$ = inject(Actions);

  private _authService = inject(AuthService)

  _onGoogle = createEffect((): any =>
    this.action$.pipe(
      ofType(googleAction),
      switchMap((action) => {
        return this._service.googleUser(action.requestData).pipe(
          switchMap(data => {
              this._authService.saveDataToStorage(data.data)
              return of(
                GoogleActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(GoogleActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );


}
