import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {MyOrderService} from "./myOrder.service";
import {
  myOrderAction, MyOrderActionFailure, MyOrderActionSuccess
} from "./myOrder.action";

@Injectable()
export class MyOrderEffect {

  private _service = inject(MyOrderService);
  private action$ = inject(Actions);

  _onMyOrders = createEffect((): any =>
    this.action$.pipe(
      ofType(myOrderAction),
      switchMap((action) => {
        return this._service.getMyOrders().pipe(
          switchMap(data => {
              return of(
                  MyOrderActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(MyOrderActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
