import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {GetMyAppealQuestionByIdService} from "./getMyAppealQuestionById.service";
import {
  getMyAppealQuestionByIdAction,
    getMyAppealQuestionByIdActionFailure,
    getMyAppealQuestionByIdActionSuccess
} from "./getMyAppealQuestionById.action";


@Injectable()
export class GetMyAppealQuestionByIdEffect {

    private _service = inject(GetMyAppealQuestionByIdService);
    private action$ = inject(Actions);

    _onGetMyAppealQuestionById = createEffect((): any =>
        this.action$.pipe(
            ofType(getMyAppealQuestionByIdAction),
            switchMap((action) => {
                return this._service.getMyAppealQuestionById(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                getMyAppealQuestionByIdActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getMyAppealQuestionByIdActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
