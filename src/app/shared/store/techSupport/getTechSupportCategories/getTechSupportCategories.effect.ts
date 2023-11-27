import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetTechSupportCategoriesService} from "./getTechSupportCategories.service";
import {
    getTechSupportCategoriesAction,
    getTechSupportCategoriesActionSuccess,
    getTechSupportCategoriesActionFailure,
} from "./getTechSupportCategories.action";

@Injectable()
export class GetTechSupportCategoriesEffect {

  private _service = inject(GetTechSupportCategoriesService);
  private action$ = inject(Actions);

  _onGetTechSupportCategories = createEffect((): any =>
    this.action$.pipe(
      ofType(getTechSupportCategoriesAction),
      switchMap((action) => {
        return this._service.getTechSupportCategories().pipe(
          switchMap(data => {
              return of(
                  getTechSupportCategoriesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getTechSupportCategoriesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
