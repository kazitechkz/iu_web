import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetSubCategoryQuestionCountService} from "./getSubCategoryQuestionCount.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
    getSubCategoryQuestionCountAction,
    getSubCategoryQuestionCountActionFailure,
    getSubCategoryQuestionCountActionSuccess,
} from "./getSubCategoryQuestionCount.action";


@Injectable()
export class GetSubCategoryQuestionCountEffect {

    private _service = inject(GetSubCategoryQuestionCountService);
    private action$ = inject(Actions);

    _onGetSubCategoryQuestionCount = createEffect((): any =>
        this.action$.pipe(
            ofType(getSubCategoryQuestionCountAction),
            switchMap((action) => {
                return this._service.getSubCategoryQuestionCount(action.requestData).pipe(
                    switchMap(data => {
                            return of(
                                getSubCategoryQuestionCountActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getSubCategoryQuestionCountActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
