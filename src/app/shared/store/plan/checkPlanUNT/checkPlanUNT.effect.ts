import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CheckPlanUNTService} from "./checkPlanUNT.service";
import {
  checkPlanUNTAction,
  checkPlanUNTActionFailure,
  checkPlanUNTActionSuccess,
} from "./checkPlanUNT.action";

@Injectable()
export class CheckPlanUNTEffect {

  private _service = inject(CheckPlanUNTService);
  private action$ = inject(Actions);

  _onCheckPlanUNT = createEffect((): any =>
    this.action$.pipe(
      ofType(checkPlanUNTAction),
      switchMap((action) => {
        return this._service.checkPlanUNT().pipe(
          switchMap(data => {
              return of(
                  checkPlanUNTActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(checkPlanUNTActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
