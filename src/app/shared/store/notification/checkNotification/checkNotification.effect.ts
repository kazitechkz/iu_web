import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CheckNotificationService} from "./checkNotification.service";
import {
  checkNotificationAction,
  checkNotificationActionFailure,
  checkNotificationActionSuccess
} from "./checkNotification.action";

@Injectable()
export class CheckNotificationEffect {

  private _service = inject(CheckNotificationService);
  private action$ = inject(Actions);

  _onCheckNotification = createEffect((): any =>
    this.action$.pipe(
      ofType(checkNotificationAction),
      switchMap((action) => {
        return this._service.checkNotification(action.requestData).pipe(
          switchMap(data => {
              return of(
                checkNotificationActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(checkNotificationActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
