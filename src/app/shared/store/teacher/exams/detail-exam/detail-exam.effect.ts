import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DetailExamService} from "./detail-exam.service";
import {catchError, of, switchMap} from "rxjs";
import {
  GetDetailExamByIdAction,
  GetDetailExamByIdFailure,
  GetDetailExamByIdSuccess,
  GetDetailUNTByIdAction, GetDetailUNTByIdFailure, GetDetailUNTByIdSuccess
} from "./detail-exam.action";

@Injectable()
export class DetailExamEffect {

    private _service = inject(DetailExamService);
    private action$ = inject(Actions);

    _onGetDetailExamById = createEffect((): any =>
        this.action$.pipe(
            ofType(GetDetailExamByIdAction),
            switchMap((action) => {
                return this._service.getDetailExamByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                GetDetailExamByIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(GetDetailExamByIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onGetDetailUNTById = createEffect((): any =>
        this.action$.pipe(
            ofType(GetDetailUNTByIdAction),
            switchMap((action) => {
                return this._service.getDetailUNTByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                GetDetailUNTByIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(GetDetailUNTByIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

}
