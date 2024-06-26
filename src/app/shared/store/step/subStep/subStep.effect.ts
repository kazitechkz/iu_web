import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SubStepService} from "./subStep.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  contentAppealAction, contentAppealFailure, contentAppealSuccess,
  subStepAction,
  subStepActionFailure,
  subStepActionSuccess,
  subStepDetailAction, subStepDetailActionFailure,
  subStepDetailActionSuccess, subStepResultAction, subStepResultActionFailure, subStepResultActionSuccess
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

@Injectable()
export class SubStepResultEffect {

  private _service = inject(SubStepService);
  private action$ = inject(Actions);

  _onSubStepResult = createEffect((): any =>
    this.action$.pipe(
      ofType(subStepResultAction),
      switchMap((action) => {
        return this._service.getSubStepResult(action.requestData).pipe(
          switchMap(data => {
            return of(subStepResultActionSuccess({responseData: data}))
          }),
          catchError((_error) => of(subStepResultActionFailure({errors: _error})))
        )
      })
    )
  );
}

@Injectable()
export class ContentAppealEffect {

  private _service = inject(SubStepService);
  private action$ = inject(Actions);

  _onContentAppeal = createEffect((): any =>
    this.action$.pipe(
      ofType(contentAppealAction),
      switchMap((action) => {
        return this._service.createContentAppeal(action.requestData).pipe(
          switchMap(data => {
            return of(contentAppealSuccess({responseData: data}))
          }),
          catchError((_error) => of(contentAppealFailure({errors: _error})))
        )
      })
    )
  );
}
