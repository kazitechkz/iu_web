import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {FinishAttemptService} from "./finishAttempt.service";
import {finishAttemptAction, finishAttemptActionSuccess, finishAttemptActionFailure} from "./finishAttempt.action";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";

@Injectable()
export class FinishAttemptEffect {

  private _service = inject(FinishAttemptService);
  private action$ = inject(Actions);
    private _route = inject(Router);
  _onFinishAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(finishAttemptAction),
      switchMap((action) => {
        return this._service.finishAttempt(action.requestData).pipe(
          switchMap(data => {
              this._route.navigate([RoutesName.resultAttempt + "/" + data.data]).then(r => true);
              return of(
                  finishAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(finishAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
