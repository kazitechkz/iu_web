import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SubStepService} from "./subStep.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  subStepAction,
  subStepActionFailure,
  subStepActionSuccess,
  subStepDetailAction, subStepDetailActionFailure,
  subStepDetailActionSuccess
} from "./subStep.action";


@Injectable()
export class SubStepEffect {

    private _service = inject(SubStepService);
    private action$ = inject(Actions);

    _onSubStep = createEffect((): any =>
        this.action$.pipe(
            ofType(subStepAction),
            switchMap((action) => {
                return this._service.getStepDetail(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                subStepActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(subStepActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );


}

@Injectable()
export class SubStepDetailEffect {

  private _service = inject(SubStepService);
  private action$ = inject(Actions);

  _onSubStepDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(subStepDetailAction),
      switchMap((action) => {
        return this._service.getSubStepDetail(action.requestData).pipe(
          switchMap(data => {
            return of(subStepDetailActionSuccess({responseData: data}))
          }),
          catchError((_error) => of(subStepDetailActionFailure({errors: _error})))
        )
      })
    )
  );
}
