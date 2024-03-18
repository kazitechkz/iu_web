import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleStatsService} from "./getBattleStats.service";
import {
    getBattleStatsAction,
    getBattleStatsActionSuccess,
    getBattleStatsActionFailure,
} from "./getBattleStats.action";

@Injectable()
export class GetBattleStatsEffect {

  private _service = inject(GetBattleStatsService);
  private action$ = inject(Actions);

  _onGetBattleStats = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleStatsAction),
      switchMap((action) => {
        return this._service.getBattleStats().pipe(
          switchMap(data => {
              return of(
                getBattleStatsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleStatsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
