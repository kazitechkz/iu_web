import {inject, Injectable} from "@angular/core";
import {AccountService} from "../../user/account/account.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {accountAction, accountActionFailure, accountActionSuccess} from "../../user/account/account.action";
import {catchError, of, switchMap} from "rxjs";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {Me} from "../../../models/user.model";
import {GetAttemptService} from "./getAttempt.service";
import {getAttemptAction, getAttemptActionFailure, getAttemptActionSuccess} from "./getAttempt.action";

@Injectable()
export class GetAttemptEffect {

  private _service = inject(GetAttemptService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _onGetAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(getAttemptAction),
      switchMap((action) => {
        return this._service.getAttempt().pipe(
          switchMap(data => {
              return of(
                getAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
