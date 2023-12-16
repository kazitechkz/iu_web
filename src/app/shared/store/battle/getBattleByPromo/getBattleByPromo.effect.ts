import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleByPromoService} from "./getBattleByPromo.service";
import {
  getBattleByPromoAction,getBattleByPromoActionSuccess ,getBattleByPromoActionFailure ,
} from "./getBattleByPromo.action";

@Injectable()
export class GetBattleByPromoEffect {

  private _service = inject(GetBattleByPromoService);
  private action$ = inject(Actions);

  _onGetBattleByPromo = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleByPromoAction),
      switchMap((action) => {
        return this._service.getBattleByPromo(action.requestData).pipe(
          switchMap(data => {
              return of(
                getBattleByPromoActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleByPromoActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
