import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {GetMySavedQuestionByIdService} from "./getMySavedQuestionById.service";
import {
  getMySavedQuestionByIdAction,
  getMySavedQuestionByIdActionFailure,
  getMySavedQuestionByIdActionSuccess
} from "./getMySavedQuestionById.action";


@Injectable()
export class GetMySavedQuestionByIdEffect {

    private _service = inject(GetMySavedQuestionByIdService);
    private action$ = inject(Actions);

    _onGetMySavedQuestionById = createEffect((): any =>
        this.action$.pipe(
            ofType(getMySavedQuestionByIdAction),
            switchMap((action) => {
                return this._service.getMySavedQuestionById(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                              getMySavedQuestionByIdActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getMySavedQuestionByIdActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
