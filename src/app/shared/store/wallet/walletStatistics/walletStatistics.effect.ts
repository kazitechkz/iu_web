import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {WalletStatistcsService} from "./walletStatistcs.service";
import {
    walletStatisticsAction,
    walletStatisticsActionSuccess, walletStatisticsActionFailure,
} from "./walletStatistics.action";

@Injectable()
export class WalletStatisticsEffect {

  private _service = inject(WalletStatistcsService);
  private action$ = inject(Actions);

  _onGetSubTournamentDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(walletStatisticsAction),
      switchMap((action) => {
        return this._service.walletStatistics(action.requestDate).pipe(
          switchMap(data => {
              return of(
                walletStatisticsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(walletStatisticsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
