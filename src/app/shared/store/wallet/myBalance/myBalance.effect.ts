import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {MyBalanceService} from "./myBalance.service";
import {
    myBalanceAction,
    myBalanceActionSuccess,
    myBalanceActionFailure,
} from "./myBalance.action";

@Injectable()
export class MyBalanceEffect {

  private _service = inject(MyBalanceService);
  private action$ = inject(Actions);

  _onMyBalance = createEffect((): any =>
    this.action$.pipe(
      ofType(myBalanceAction),
      switchMap((action) => {
        return this._service.getMyBalance().pipe(
          switchMap(data => {
              return of(
                myBalanceActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(myBalanceActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
