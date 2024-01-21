import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetCareerQuizService} from "./getCareerQuiz.service";
import {getCareerQuizAction, getCareerQuizActionFailure, getCareerQuizActionSuccess} from "./getCareerQuiz.action";

@Injectable()
export class GetCareerQuizEffect {

  private _service = inject(GetCareerQuizService);
  private action$ = inject(Actions);

  _onGetCareerQuiz = createEffect((): any =>
    this.action$.pipe(
      ofType(getCareerQuizAction),
      switchMap((action) => {
        return this._service.getCareerQuiz(action.requestData).pipe(
          switchMap(data => {
              return of(
                getCareerQuizActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getCareerQuizActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
