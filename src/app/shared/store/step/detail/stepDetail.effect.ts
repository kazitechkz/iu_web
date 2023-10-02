import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StepDetailService} from "./stepDetail.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {stepDetailAction, stepDetailActionFailure, stepDetailActionSuccess} from "./stepDetail.action";


@Injectable()
export class StepDetailEffect {

    private _service = inject(StepDetailService);
    private action$ = inject(Actions);

    _onStep = createEffect((): any =>
        this.action$.pipe(
            ofType(stepDetailAction),
            switchMap((action) => {
                return this._service.getStepDetail(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                stepDetailActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(stepDetailActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
