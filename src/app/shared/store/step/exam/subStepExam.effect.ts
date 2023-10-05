import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SubStepExamService} from "./subStepExam.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  subStepExamAction, subStepExamActionFailure, subStepExamActionSuccess,
} from "./subStepExam.action";


@Injectable()
export class SubStepExamEffect {

    private _service = inject(SubStepExamService);
    private action$ = inject(Actions);

    _onSubStep = createEffect((): any =>
        this.action$.pipe(
            ofType(subStepExamAction),
            switchMap((action) => {
                return this._service.getStepExam(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                subStepExamActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(subStepExamActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
