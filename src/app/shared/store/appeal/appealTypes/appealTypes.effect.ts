import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AppealTypesService} from "./appealTypes.service";
import {
  appealTypesAction, appealTypesActionFailure, appealTypesActionSuccess,
} from "./appealTypes.action";

@Injectable()
export class AppealTypesEffect {

  private _service = inject(AppealTypesService);
  private action$ = inject(Actions);

  _onAppealType = createEffect((): any =>
    this.action$.pipe(
      ofType(appealTypesAction),
      switchMap((action) => {
        return this._service.getAppealTypes().pipe(
          switchMap(data => {
              return of(
                appealTypesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(appealTypesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
