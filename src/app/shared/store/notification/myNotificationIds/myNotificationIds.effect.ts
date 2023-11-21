import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {MyNotificationIdsService} from "./myNotificationIds.service";
import {
  myNotificationIdsAction,
  MyNotificationIdsActionFailure,
  MyNotificationIdsActionSuccess
} from "./myNotificationIds.action";

@Injectable()
export class MyNotificationIdsEffect {

  private _service = inject(MyNotificationIdsService);
  private action$ = inject(Actions);

  _onMyNotificationIds = createEffect((): any =>
    this.action$.pipe(
      ofType(myNotificationIdsAction),
      switchMap((action) => {
        return this._service.myNotificationIds().pipe(
          switchMap(data => {
              return of(
                MyNotificationIdsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(MyNotificationIdsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
