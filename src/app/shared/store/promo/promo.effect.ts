import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {PromoService} from "./promo.service";
import {
  promoGetAction, promoGetActionFailure, promoGetActionSuccess

} from "./promo.action";

@Injectable()
export class PromoEffect {

  private _service = inject(PromoService);
  private action$ = inject(Actions);

  _onPromo = createEffect((): any =>
    this.action$.pipe(
      ofType(promoGetAction),
      switchMap((action) => {
        return this._service.getPromoPercentage(action.req).pipe(
          switchMap(data => {
              return of(
                promoGetActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(promoGetActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
