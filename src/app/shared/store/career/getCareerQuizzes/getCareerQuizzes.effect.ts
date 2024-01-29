import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetCareerQuizzesService} from "./getCareerQuizzes.service";
import {
  getCareerQuizzesAction,
  getCareerQuizzesActionSuccess,
  getCareerQuizzesActionFailure,
} from "./getCareerQuizzes.action";

@Injectable()
export class GetCareerQuizzesEffect {

  private _service = inject(GetCareerQuizzesService);
  private action$ = inject(Actions);

  _onGetCareerQuizzes = createEffect((): any =>
    this.action$.pipe(
      ofType(getCareerQuizzesAction),
      switchMap((action) => {
        return this._service.getCareerQuizzes(action.requestData).pipe(
          switchMap(data => {
              return of(
                getCareerQuizzesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getCareerQuizzesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
