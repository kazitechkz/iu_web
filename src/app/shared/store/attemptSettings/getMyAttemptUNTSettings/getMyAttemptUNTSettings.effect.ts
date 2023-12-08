import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetMyAttemptUNTSettingsService} from "./getMyAttemptUNTSettings.service";
import {
    getMyAttemptUNTSettingsAction, getMyAttemptUNTSettingsActionFailure,
    getMyAttemptUNTSettingsActionSuccess
} from "./getMyAttemptUNTSettings.action";


@Injectable()
export class GetMyAttemptUNTSettingsEffect {

  private _service = inject(GetMyAttemptUNTSettingsService);
  private action$ = inject(Actions);

  _onGetMyAttemptUNTSettings = createEffect((): any =>
    this.action$.pipe(
      ofType(getMyAttemptUNTSettingsAction),
      switchMap((action) => {
        return this._service.getMyAttemptUNTSettings(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getMyAttemptUNTSettingsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getMyAttemptUNTSettingsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
