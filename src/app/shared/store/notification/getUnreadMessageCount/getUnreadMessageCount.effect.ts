import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetUnreadMessageCountService} from "./getUnreadMessageCount.service";
import {
  getUnreadMessageCountAction,
  getUnreadMessageCountActionFailure,
  getUnreadMessageCountActionSuccess
} from "./getUnreadMessageCount.action";

@Injectable()
export class GetUnreadMessageCountEffect {

  private _service = inject(GetUnreadMessageCountService);
  private action$ = inject(Actions);

  _onGetUnreadMessageCount = createEffect((): any =>
    this.action$.pipe(
      ofType(getUnreadMessageCountAction),
      switchMap((action) => {
        return this._service.getUnreadMessageCount().pipe(
          switchMap(data => {
              return of(
                getUnreadMessageCountActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getUnreadMessageCountActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
