import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {SubCategoryService} from "./subCategory.service";
import {
  GetSubCategoriesAction,
  GetSubCategoriesActionFailure,
  GetSubCategoriesActionSuccess
} from "./subCategory.action";

@Injectable()
export class SubCategoryEffect {

  private _service = inject(SubCategoryService);
  private action$ = inject(Actions);

  _onSubCategories = createEffect((): any =>
    this.action$.pipe(
      ofType(GetSubCategoriesAction),
      switchMap((action) => {
        return this._service.getSubCategories(action.categoryID, action.localeID).pipe(
          switchMap(data => {
              return of(
                GetSubCategoriesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(GetSubCategoriesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
