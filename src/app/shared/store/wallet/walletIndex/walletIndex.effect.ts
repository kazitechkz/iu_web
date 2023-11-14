import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {WalletIndexService} from "./walletIndex.service";
import {
    walletIndexAction,
    walletIndexActionSuccess, walletIndexActionFailure,
} from "./walletIndex.action";

@Injectable()
export class WalletIndexEffect {

  private _service = inject(WalletIndexService);
  private action$ = inject(Actions);

  _onGetSubTournamentDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(walletIndexAction),
      switchMap((action) => {
        return this._service.walletIndex().pipe(
          switchMap(data => {
              return of(
                walletIndexActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(walletIndexActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
