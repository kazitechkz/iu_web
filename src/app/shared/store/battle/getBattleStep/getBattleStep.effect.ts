import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleStepService} from "./getBattleStep.service";
import {
  getBattleStepAction,getBattleStepActionSuccess ,getBattleStepActionFailure ,
} from "./getBattleStep.action";

@Injectable()
export class GetBattleStepEffect {

  private _service = inject(GetBattleStepService);
  private action$ = inject(Actions);

  _onGetBattleStep = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleStepAction),
      switchMap((action) => {
        return this._service.getBattleStep(action.requestData).pipe(
          switchMap(data => {
              return of(
                getBattleStepActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleStepActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
