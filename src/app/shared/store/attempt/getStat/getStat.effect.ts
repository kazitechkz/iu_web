import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetStatService} from "./getStat.service";
import {
    getStatAction,
    getStatActionSuccess,
    getStatActionFailure
} from "./getStat.action";

@Injectable()
export class GetStatEffect {

  private _service = inject(GetStatService);
  private action$ = inject(Actions);

  _onGetAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(getStatAction),
      switchMap((action) => {
        return this._service.getAttemptStat(action.requestData).pipe(
          switchMap(data => {
              return of(
                getStatActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getStatActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
