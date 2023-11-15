import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {WalletTransferService} from "./walletTransfer.service";
import {
    walletTransferAction,
    walletTransferActionSuccess, walletTransferActionFailure,
} from "./walletTransfer.action";
import {TwNotification} from "ng-tw";

@Injectable()
export class WalletTransferEffect {

  private _service = inject(WalletTransferService);
  private action$ = inject(Actions);
  private _notification = inject(TwNotification)

  _onWalletTransferEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(walletTransferAction),
      switchMap((action) => {
        return this._service.walletTransfer(action.requestData).pipe(
          switchMap(data => {
            this._notification.show({type: 'success', title: 'Success', text: 'Перевод выполнен!'});
              return of(
                walletTransferActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(walletTransferActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
