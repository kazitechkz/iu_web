import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetArraySettingsUNTService} from "./getArraySettingsUNT.service";
import {
  getArraySettingsUNTAction, getArraySettingsUNTActionFailure, getArraySettingsUNTActionSuccess,
} from "./getArraySettingsUNT.action";

@Injectable()
export class GetArraySettingsUNTEffect {

  private _service = inject(GetArraySettingsUNTService);
  private action$ = inject(Actions);

  _onGetArraySettingsUNT = createEffect((): any =>
    this.action$.pipe(
      ofType(getArraySettingsUNTAction),
      switchMap((action) => {
        return this._service.getArraySettingsUNT(action.requestData).pipe(
          switchMap(data => {
              return of(
                getArraySettingsUNTActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getArraySettingsUNTActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
