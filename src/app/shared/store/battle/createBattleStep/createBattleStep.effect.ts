import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CreateBattleStepService} from "./createBattleStep.service";
import {
  createBattleStepAction,
  createBattleStepActionFailure,
  createBattleStepActionSuccess,

} from "./createBattleStep.action";

@Injectable()
export class CreateBattleStepEffect {

  private _service = inject(CreateBattleStepService);
  private action$ = inject(Actions);

  _onCreateBattleStep = createEffect((): any =>
    this.action$.pipe(
      ofType(createBattleStepAction),
      switchMap((action) => {
        return this._service.createBattleStep(action.requestData).pipe(
          switchMap(data => {
              return of(
                createBattleStepActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createBattleStepActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
