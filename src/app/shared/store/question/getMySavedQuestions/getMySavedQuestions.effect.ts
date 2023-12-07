import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {GetMySavedQuestionsService} from "./getMySavedQuestions.service";
import {
  getMySavedQuestionsAction,
  getMySavedQuestionsActionFailure,
  getMySavedQuestionsActionSuccess
} from "./getMySavedQuestions.action";


@Injectable()
export class GetMySavedQuestionsEffect {

    private _service = inject(GetMySavedQuestionsService);
    private action$ = inject(Actions);

    _onGetMySavedQuestions = createEffect((): any =>
        this.action$.pipe(
            ofType(getMySavedQuestionsAction),
            switchMap((action) => {
                return this._service.getMySavedQuestions(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                getMySavedQuestionsActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getMySavedQuestionsActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
