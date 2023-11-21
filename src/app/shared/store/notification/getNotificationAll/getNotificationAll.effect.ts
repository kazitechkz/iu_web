import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetNotificationAllService} from "./getNotificationAll.service";
import {
  getNotificationAllAction,
  getNotificationAllActionFailure,
  getNotificationAllActionSuccess
} from "./getNotificationAll.action";

@Injectable()
export class GetNotificationAllEffect {

  private _service = inject(GetNotificationAllService);
  private action$ = inject(Actions);

  _onGetNotificationAll = createEffect((): any =>
    this.action$.pipe(
      ofType(getNotificationAllAction),
      switchMap((action) => {
        return this._service.getNotificationAll(action.requestData).pipe(
          switchMap(data => {
              return of(
                getNotificationAllActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getNotificationAllActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
