import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {JoinToBattleService} from "./joinToBattle.service";
import {
  joinToBattleAction,
  joinToBattleActionFailure,
  joinToBattleActionSuccess,

} from "./joinToBattle.action";

@Injectable()
export class JoinToBattleEffect {

  private _service = inject(JoinToBattleService);
  private action$ = inject(Actions);

  _onJoinToBattle = createEffect((): any =>
    this.action$.pipe(
      ofType(joinToBattleAction),
      switchMap((action) => {
        return this._service.joinToBattle(action.requestData).pipe(
          switchMap(data => {
              return of(
                joinToBattleActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(joinToBattleActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
