import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetCategoryQuestionCountService} from "./getCategoryQuestionCount.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
    getCategoryQuestionCountAction, getCategoryQuestionCountActionFailure,
    getCategoryQuestionCountActionSuccess,
} from "./getCategoryQuestionCount.action";


@Injectable()
export class GetCategoryQuestionCountEffect {

    private _service = inject(GetCategoryQuestionCountService);
    private action$ = inject(Actions);

    _onGetCategoryQuestionCount = createEffect((): any =>
        this.action$.pipe(
            ofType(getCategoryQuestionCountAction),
            switchMap((action) => {
                return this._service.getCategoryQuestionCount(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                getCategoryQuestionCountActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getCategoryQuestionCountActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
