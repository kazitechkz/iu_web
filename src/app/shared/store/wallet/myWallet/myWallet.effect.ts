import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {MyWalletService} from "./myWallet.service";
import {
    myWalletAction,
    myWalletActionSuccess,
    myWalletActionFailure,
} from "./myWallet.action";

@Injectable()
export class MyWalletEffect {

  private _service = inject(MyWalletService);
  private action$ = inject(Actions);

  _onMyWallet = createEffect((): any =>
    this.action$.pipe(
      ofType(myWalletAction),
      switchMap((action) => {
        return this._service.getMyWallet().pipe(
          switchMap(data => {
              return of(
                myWalletActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(myWalletActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
