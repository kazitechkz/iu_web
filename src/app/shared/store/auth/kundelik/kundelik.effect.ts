import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {KundelikService} from "./kundelik.service";
import {catchError, of, switchMap} from "rxjs";
import {
  kundelikAction,
  KundelikActionSuccess,
  KundelikActionFailure
} from "./kundelik.action";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {TwNotification} from "ng-tw";
import {AuthService} from "../../../../auth/auth.service";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {Me} from "../../../models/user.model";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class KundelikEffect {

  private _service = inject(KundelikService);
  private action$ = inject(Actions);

  private _authService = inject(AuthService)

  _onKundelik = createEffect((): any =>
    this.action$.pipe(
      ofType(kundelikAction),
      switchMap((action) => {
        return this._service.kundelikUser(action.requestData).pipe(
          switchMap(data => {
              this._authService.saveDataToStorage(data.data)
              return of(
                KundelikActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(KundelikActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );


}
