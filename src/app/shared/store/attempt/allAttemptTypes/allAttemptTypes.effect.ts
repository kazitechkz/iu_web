import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {AllAttemptTypesService} from "./allAttemptTypes.service";
import {
  allAttemptTypesAction,
  allAttemptTypesActionFailure,
  allAttemptTypesActionSuccess
} from "./allAttemptTypes.action";

@Injectable()
export class AllAttemptTypesEffect {

  private _service = inject(AllAttemptTypesService);
  private action$ = inject(Actions);

  _onAllAttemptTypes = createEffect((): any =>
    this.action$.pipe(
      ofType(allAttemptTypesAction),
      switchMap((action) => {
        return this._service.allAttemptTypes().pipe(
          switchMap(data => {
              return of(
                allAttemptTypesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(allAttemptTypesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
