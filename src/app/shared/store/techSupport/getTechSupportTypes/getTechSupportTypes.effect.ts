import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetTechSupportTypesService} from "./getTechSupportTypes.service";
import {
    getTechSupportTypesAction,
    getTechSupportTypesActionSuccess,
    getTechSupportTypesActionFailure,
} from "./getTechSupportTypes.action";

@Injectable()
export class GetTechSupportTypesEffect {

  private _service = inject(GetTechSupportTypesService);
  private action$ = inject(Actions);

  _onGetTechSupportTypes = createEffect((): any =>
    this.action$.pipe(
      ofType(getTechSupportTypesAction),
      switchMap((action) => {
        return this._service.getTechSupportTypes().pipe(
          switchMap(data => {
              return of(
                  getTechSupportTypesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getTechSupportTypesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
