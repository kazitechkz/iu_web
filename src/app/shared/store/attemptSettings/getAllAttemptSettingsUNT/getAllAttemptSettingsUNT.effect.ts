import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAllAttemptSettingsUNTService} from "./getAllAttemptSettingsUNT.service";
import {
  getAllAttemptSettingsUNTAction, getAllAttemptSettingsUNTActionFailure, getAllAttemptSettingsUNTActionSuccess,
} from "./getAllAttemptSettingsUNT.action";

@Injectable()
export class GetAllAttemptSettingsUNTEffect {

  private _service = inject(GetAllAttemptSettingsUNTService);
  private action$ = inject(Actions);

  _onGetAllAttemptSettingsUNT = createEffect((): any =>
    this.action$.pipe(
      ofType(getAllAttemptSettingsUNTAction),
      switchMap((action) => {
        return this._service.getAllAttemptSettingsUNT(action.requestData).pipe(
          switchMap(data => {
              return of(
                getAllAttemptSettingsUNTActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAllAttemptSettingsUNTActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
