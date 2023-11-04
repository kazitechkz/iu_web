import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetUntPlanService} from "./getUntPlan.service";
import {
  getUntPlanAction,
  getUntPlanActionFailure,
  getUntPlanActionSuccess
} from "./getUntPlan.action";

@Injectable()
export class GetUntPlanEffect {

  private _service = inject(GetUntPlanService);
  private action$ = inject(Actions);

  _onGetUntPlan = createEffect((): any =>
    this.action$.pipe(
      ofType(getUntPlanAction),
      switchMap((action) => {
        return this._service.getUntPlan().pipe(
          switchMap(data => {
              return of(
                getUntPlanActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getUntPlanActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
