import {inject, Injectable} from "@angular/core";
import {AccountService} from "../../user/account/account.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {accountAction, accountActionFailure, accountActionSuccess} from "../../user/account/account.action";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {Me} from "../../../models/user.model";
import {CreateAttemptService} from "./createAttempt.service";
import {createAttemptAction, createAttemptActionFailure, createAttemptActionSuccess} from "./createAttempt.action";
import {registerActionSuccess} from "../../auth/register/Register.action";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class CreateAttemptEffect {

  private _service = inject(CreateAttemptService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _onGetAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(createAttemptAction),
      switchMap((action) => {
        return this._service.createAttempt(action.requestData).pipe(
          switchMap(data => {
              return of(
                createAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

  createAttemptSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(createAttemptActionSuccess),
        // @ts-ignore
        exhaustMap((action) => this._route.navigate([RoutesName.passUntExam + "/" + action.responseData.data.attempt_id ?? 0]))
      );
    },
    {dispatch: false}
  );
}
