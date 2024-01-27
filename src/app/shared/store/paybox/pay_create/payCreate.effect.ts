import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {PayCreateService} from "./payCreate.service";
import {
  payCreateAction, payCreateActionFailure, payCreateActionSuccess
} from "./payCreate.action";

@Injectable()
export class PayCreateEffect {

  private _service = inject(PayCreateService);
  private action$ = inject(Actions);

  _onPayCreate = createEffect((): any =>
    this.action$.pipe(
      ofType(payCreateAction),
      switchMap((action) => {
        return this._service.payCreate(action.req).pipe(
          switchMap(data => {
              return of(
                  payCreateActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(payCreateActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
