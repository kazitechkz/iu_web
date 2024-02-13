import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
  myCareerAttemptsAction,
  myCareerAttemptsActionFailure,
  myCareerAttemptsActionSuccess
} from "./myCareerAttempts.action";
import {MyCareerAttemptsService} from "./myCareerAttempts.service";

@Injectable()
export class MyCareerAttemptsEffect {

  private _service = inject(MyCareerAttemptsService);
  private action$ = inject(Actions);

  _onMyCareerAttempts = createEffect((): any =>
    this.action$.pipe(
      ofType(myCareerAttemptsAction),
      switchMap((action) => {
        return this._service.myCareerAttemptsService(action.requestData).pipe(
          switchMap(data => {
              return of(
                myCareerAttemptsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(myCareerAttemptsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
