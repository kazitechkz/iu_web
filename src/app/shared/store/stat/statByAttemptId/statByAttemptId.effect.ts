import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {StatByAttemptIdService} from "./statByAttemptId.service";
import {statByAttemptIdAction, StatByAttemptIdSuccessAction,StatByAttemptIdFailureAction} from "./statByAttemptId.action";

@Injectable()
export class StatByAttemptIdEffect {

  private _service = inject(StatByAttemptIdService);
  private action$ = inject(Actions);

  _onGetStatByAttemptId = createEffect((): any =>
    this.action$.pipe(
      ofType(statByAttemptIdAction),
      switchMap((action) => {
        return this._service.getStatByAttemptId(action.requestData).pipe(
          switchMap(data => {
              return of(
                StatByAttemptIdSuccessAction({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(StatByAttemptIdFailureAction({errors: _error}))
          )
        )
      }),
    ),
  );
}
