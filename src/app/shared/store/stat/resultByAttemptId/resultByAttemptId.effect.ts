import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {ResultByAttemptIdService} from "./resultByAttemptId.service";
import {resultByAttemptIdAction, resultByAttemptIdSuccessAction,resultByAttemptIdFailureAction} from "./resultByAttemptId.action";

@Injectable()
export class ResultByAttemptIdEffect {

  private _service = inject(ResultByAttemptIdService);
  private action$ = inject(Actions);

  _onGetResultByAttemptId = createEffect((): any =>
    this.action$.pipe(
      ofType(resultByAttemptIdAction),
      switchMap((action) => {
        return this._service.getResultByAttemptId(action.requestData).pipe(
          switchMap(data => {
              return of(
                resultByAttemptIdSuccessAction({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(resultByAttemptIdFailureAction({errors: _error}))
          )
        )
      }),
    ),
  );
}
