import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";

import {CategoryService} from "./category.service";
import {GetCategoriesAction, GetCategoriesActionFailure, GetCategoriesActionSuccess} from "./category.action";

@Injectable()
export class CategoryEffect {

  private _service = inject(CategoryService);
  private action$ = inject(Actions);

  _onCategories = createEffect((): any =>
    this.action$.pipe(
      ofType(GetCategoriesAction),
      switchMap((action) => {
        return this._service.getCategories(action.subjectID, action.localeID).pipe(
          switchMap(data => {
              return of(
                GetCategoriesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(GetCategoriesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
