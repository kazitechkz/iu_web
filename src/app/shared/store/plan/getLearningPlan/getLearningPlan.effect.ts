import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetLearningPlanService} from "./getLearningPlan.service";
import {
  getLearningPlanAction,
  getLearningPlanActionFailure,
  getLearningPlanActionSuccess
} from "./getLearningPlan.action";

@Injectable()
export class GetLearningPlanEffect {

  private _service = inject(GetLearningPlanService);
  private action$ = inject(Actions);

  _onGetLearningPlan = createEffect((): any =>
    this.action$.pipe(
      ofType(getLearningPlanAction),
      switchMap((action) => {
        return this._service.getLearningPlan().pipe(
          switchMap(data => {
              return of(
                getLearningPlanActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getLearningPlanActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
