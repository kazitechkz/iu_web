import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {UserCheckService} from "./userCheck.service";
import {userCheckAction, userCheckActionFailure, userCheckActionSuccess} from "./userCheck.action";
import {SessionService} from "../../../services/session.service";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";

@Injectable()
export class UserCheckEffect {

  private _service = inject(UserCheckService);
  private action$ = inject(Actions);
  private _session = inject(SessionService)

  _onUserCheck = createEffect((): any =>
    this.action$.pipe(
      ofType(userCheckAction),
      switchMap((action) => {
        return this._service.userCheck().pipe(
          switchMap(data => {
              if(data.data === false){
                this._session.removeDataFromLocalStorage(LocalKeysConstants.token)
                this._session.removeDataFromLocalStorage(LocalKeysConstants.user)
              }
              return of(
                  userCheckActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(userCheckActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
