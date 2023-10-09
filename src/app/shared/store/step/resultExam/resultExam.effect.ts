import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ResultExamService} from "./resultExam.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  resultExamAction, resultExamActionFailure, resultExamActionSuccess
} from "./resultExam.action";


@Injectable()
export class ResultExamEffect {

  private _service = inject(ResultExamService);
  private action$ = inject(Actions);

  _onResultExam = createEffect((): any =>
    this.action$.pipe(
      ofType(resultExamAction),
      switchMap((action) => {
        return this._service.getResultExam(action.requestData).pipe(
          switchMap(data => {
              return of(
                resultExamActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) => {
            return of(resultExamActionFailure({errors: _error}))
          })
        )
      }),
    ),
  );
}
