import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
    walletRatingAction,
    walletRatingActionSuccess, walletRatingActionFailure,
} from "./walletRating.action";
import {WalletRatingService} from "./walletRating.service";

@Injectable()
export class WalletRatingEffect {

  private _service = inject(WalletRatingService);
  private action$ = inject(Actions);

  _onWalletRatingEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(walletRatingAction),
      switchMap((action) => {
        return this._service.walletRating(action.requestData).pipe(
          switchMap(data => {
              return of(
                walletRatingActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(walletRatingActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
