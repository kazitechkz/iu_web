import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {CreateAttemptSettingsUNTService} from "./createAttemptSettingsUNT.service";
import {
  createAttemptSettingsUNTAction,
    createAttemptSettingsUNTActionFailure,
    createAttemptSettingsUNTActionSuccess
} from "./createAttemptSettingsUNT.action";

@Injectable()
export class CreateAttemptSettingsUNTEffect {

  private _service = inject(CreateAttemptSettingsUNTService);
  private action$ = inject(Actions);

  _onCreateAttemptSettingsUNT = createEffect((): any =>
    this.action$.pipe(
      ofType(createAttemptSettingsUNTAction),
      switchMap((action) => {
        return this._service.createAttemptSettingsUNT(action.requestData).pipe(
          switchMap(data => {
              return of(
                  createAttemptSettingsUNTActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createAttemptSettingsUNTActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
