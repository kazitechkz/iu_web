import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {PassCareerQuizService} from "./passCareerQuiz.service";
import {
  passCareerQuizAction,
  passCareerQuizActionSuccess,
  passCareerQuizActionFailure
} from "./passCareerQuiz.action";

@Injectable()
export class PassCareerQuizEffect {

  private _service = inject(PassCareerQuizService);
  private action$ = inject(Actions);

  _onPassCareerQuiz = createEffect((): any =>
    this.action$.pipe(
      ofType(passCareerQuizAction),
      switchMap((action) => {
        return this._service.passCareerQuiz(action.requestData).pipe(
          switchMap(data => {
              return of(
                passCareerQuizActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(passCareerQuizActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
