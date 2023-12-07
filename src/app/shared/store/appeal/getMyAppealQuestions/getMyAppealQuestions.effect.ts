import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {GetMyAppealQuestionsService} from "./getMyAppealQuestions.service";
import {
  getMyAppealQuestionsAction,
    getMyAppealQuestionsActionFailure,
    getMyAppealQuestionsActionSuccess
} from "./getMyAppealQuestions.action";


@Injectable()
export class GetMyAppealQuestionsEffect {

    private _service = inject(GetMyAppealQuestionsService);
    private action$ = inject(Actions);

    _onGetMyAppealQuestions = createEffect((): any =>
        this.action$.pipe(
            ofType(getMyAppealQuestionsAction),
            switchMap((action) => {
                return this._service.getMyAppealQuestions(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                getMyAppealQuestionsActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getMyAppealQuestionsActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
