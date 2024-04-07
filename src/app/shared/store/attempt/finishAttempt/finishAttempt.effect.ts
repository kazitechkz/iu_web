import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {FinishAttemptService} from "./finishAttempt.service";
import {finishAttemptAction, finishAttemptActionSuccess, finishAttemptActionFailure} from "./finishAttempt.action";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";
import {TwNotification} from "ng-tw";

@Injectable()
export class FinishAttemptEffect {
  private _notification = inject(TwNotification)
  private _service = inject(FinishAttemptService);
  private action$ = inject(Actions);
    private _route = inject(Router);
  _onFinishAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(finishAttemptAction),
      switchMap((action) => {
        return this._service.finishAttempt(action.requestData).pipe(
          switchMap(data => {
            if (data.data && data.data.points !== 0) {
              this._notification.show({ type: 'info', title: 'Ураа!', text: 'Вы заработали ' + data.data?.points + ' iU Coins'})
            }
              this._route.navigate([RoutesName.resultAttempt + "/" + data.data?.attempt_id]).then(r => true);
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
