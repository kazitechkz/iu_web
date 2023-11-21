import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetNotificationTypeAllService} from "./getNotificationTypeAll.service";
import {
  getNotificationTypeAllAction,
  getNotificationTypeAllActionFailure,
  getNotificationTypeAllActionSuccess
} from "./getNotificationTypeAll.action";

@Injectable()
export class GetNotificationTypeAllEffect {

  private _service = inject(GetNotificationTypeAllService);
  private action$ = inject(Actions);

  _onGetNotificationTypeAll = createEffect((): any =>
    this.action$.pipe(
      ofType(getNotificationTypeAllAction),
      switchMap((action) => {
        return this._service.getNotificationTypeAll().pipe(
          switchMap(data => {
              return of(
                getNotificationTypeAllActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getNotificationTypeAllActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
