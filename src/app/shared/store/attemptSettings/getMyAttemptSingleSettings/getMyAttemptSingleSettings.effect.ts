import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetMyAttemptSingleSettingsService} from "./getMyAttemptSingleSettings.service";
import {
    getMyAttemptSingleSettingsAction, getMyAttemptSingleSettingsActionFailure,
    getMyAttemptSingleSettingsActionSuccess
} from "./getMyAttemptSingleSettings.action";


@Injectable()
export class GetMyAttemptSingleSettingsEffect {

  private _service = inject(GetMyAttemptSingleSettingsService);
  private action$ = inject(Actions);

  _onGetMyAttemptSingleSettings = createEffect((): any =>
    this.action$.pipe(
      ofType(getMyAttemptSingleSettingsAction),
      switchMap((action) => {
        return this._service.getMyAttemptSingleSettings(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getMyAttemptSingleSettingsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getMyAttemptSingleSettingsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
