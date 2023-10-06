import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SubStepExamService} from "./subStepExam.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  passSubStepExamAction, passSubStepExamActionFailure, passSubStepExamActionSuccess,
  subStepExamAction, subStepExamActionFailure, subStepExamActionSuccess,
} from "./subStepExam.action";


@Injectable()
export class SubStepExamEffect {

  private _service = inject(SubStepExamService);
  private action$ = inject(Actions);

  _onSubStepExam = createEffect((): any =>
    this.action$.pipe(
      ofType(subStepExamAction),
      switchMap((action) => {
        return this._service.getStepExam(action.requestData).pipe(
          switchMap(data => {
              return of(
                subStepExamActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) => {
            return of(subStepExamActionFailure({errors: _error}))
          })
        )
      }),
    ),
  );
}

@Injectable()
export class PassSubStepExamEffect {

  private _service = inject(SubStepExamService);
  private action$ = inject(Actions);

  _passSubStepExam = createEffect((): any =>
    this.action$.pipe(
      ofType(passSubStepExamAction),
      switchMap((action) => {
        return this._service.passStepExam(action.requestData).pipe(
          switchMap(data => {
              return of(
                passSubStepExamActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) => {
            return of(passSubStepExamActionFailure({errors: _error}))
          })
        )
      }),
    ),
  );
}
