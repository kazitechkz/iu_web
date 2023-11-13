import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetMySubjectsService} from "./getMySubjects.service";
import {
    getMySubjectsAction, getMySubjectsActionFailure, getMySubjectsActionSuccess
} from "./getMySubjects.action";

@Injectable()
export class GetMySubjectsEffect {

  private _service = inject(GetMySubjectsService);
  private action$ = inject(Actions);

  _onGetMySubjects = createEffect((): any =>
    this.action$.pipe(
      ofType(getMySubjectsAction),
      switchMap((action) => {
        return this._service.getMySubjects().pipe(
          switchMap(data => {
              return of(
                getMySubjectsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getMySubjectsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
