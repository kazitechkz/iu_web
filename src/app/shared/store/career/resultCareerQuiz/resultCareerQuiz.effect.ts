import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {ResultCareerQuizService} from "./resultCareerQuiz.service";
import {resultCareerQuizAction, resultCareerQuizActionFailure, resultCareerQuizActionSuccess} from "./resultCareerQuiz.action";

@Injectable()
export class ResultCareerQuizEffect {

  private _service = inject(ResultCareerQuizService);
  private action$ = inject(Actions);

  _onResultCareerQuiz = createEffect((): any =>
    this.action$.pipe(
      ofType(resultCareerQuizAction),
      switchMap((action) => {
        return this._service.resultCareerQuiz(action.requestData).pipe(
          switchMap(data => {
              return of(
                resultCareerQuizActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(resultCareerQuizActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
