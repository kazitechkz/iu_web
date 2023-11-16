import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {CreateAttemptSettingsService} from "./createAttemptSettings.service";
import {
  createAttemptSettingsAction,
  createAttemptSettingsActionFailure,
  createAttemptSettingsActionSuccess
} from "./createAttemptSettings.action";

@Injectable()
export class CreateAttemptSettingsEffect {

  private _service = inject(CreateAttemptSettingsService);
  private action$ = inject(Actions);

  _onCreateAttemptSettings = createEffect((): any =>
    this.action$.pipe(
      ofType(createAttemptSettingsAction),
      switchMap((action) => {
        return this._service.createAttemptSettings(action.requestData).pipe(
          switchMap(data => {
              return of(
                createAttemptSettingsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createAttemptSettingsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
