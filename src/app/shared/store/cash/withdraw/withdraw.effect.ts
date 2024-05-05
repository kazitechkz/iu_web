import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
  withdrawAction,
  withdrawActionSuccess,
  withdrawActionFailure, requestWithdrawAction, requestWithdrawActionSuccess, requestWithdrawActionFailure,
} from "./withdraw.action";
import {WithdrawService} from "./withdraw.service";

@Injectable()
export class WithdrawEffect {

  private _service = inject(WithdrawService);
  private action$ = inject(Actions);

  _onCashHistoryEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(withdrawAction),
      switchMap((action) => {
        return this._service.getMyHistories().pipe(
          switchMap(data => {
              return of(
                withdrawActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(withdrawActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
  _onRequestWithdrawEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(requestWithdrawAction),
      switchMap((action) => {
        return this._service.requestWithdraw(action.req).pipe(
          switchMap(data => {
              return of(
                requestWithdrawActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(requestWithdrawActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
