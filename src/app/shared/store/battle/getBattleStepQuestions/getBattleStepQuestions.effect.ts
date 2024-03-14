import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleStepQuestionsService} from "./getBattleStepQuestions.service";
import {
  getBattleStepQuestionsAction,
  getBattleStepQuestionsActionSuccess,
  getBattleStepQuestionsActionFailure,
} from "./getBattleStepQuestions.action";

@Injectable()
export class GetBattleStepQuestionsEffect {

  private _service = inject(GetBattleStepQuestionsService);
  private action$ = inject(Actions);

  _onGetBattleStepQuestions = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleStepQuestionsAction),
      switchMap((action) => {
        return this._service.getBattleStepQuestions(action.requestData).pipe(
          switchMap(data => {
              return of(
                getBattleStepQuestionsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleStepQuestionsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
