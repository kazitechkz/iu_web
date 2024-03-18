import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleHistoryService} from "./getBattleHistory.service";
import {
    getBattleHistoryAction,
    getBattleHistoryActionSuccess,
    getBattleHistoryActionFailure,
} from "./getBattleHistory.action";

@Injectable()
export class GetBattleHistoryEffect {

  private _service = inject(GetBattleHistoryService);
  private action$ = inject(Actions);

  _onGetBattleHistory = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleHistoryAction),
      switchMap((action) => {
        return this._service.getBattleHistory(action.requestData).pipe(
          switchMap(data => {
              return of(
                getBattleHistoryActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleHistoryActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
