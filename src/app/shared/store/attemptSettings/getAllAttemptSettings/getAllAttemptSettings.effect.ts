import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAllAttemptSettingsService} from "./getAllAttemptSettings.service";
import {
  getAllAttemptSettingsAction,
  getAllAttemptSettingsActionFailure,
  getAllAttemptSettingsActionSuccess
} from "./getAllAttemptSettings.action";

@Injectable()
export class GetAllAttemptSettingsEffect {

  private _service = inject(GetAllAttemptSettingsService);
  private action$ = inject(Actions);

  _onGetAllAttemptSettings = createEffect((): any =>
    this.action$.pipe(
      ofType(getAllAttemptSettingsAction),
      switchMap((action) => {
        return this._service.getAllAttemptSettings(action.requestData).pipe(
          switchMap(data => {
              return of(
                getAllAttemptSettingsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAllAttemptSettingsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
