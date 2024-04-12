import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetInformationsByCategoryService} from "./getInformationsByCategory.service";
import {getInformationsByCategoryAction, getInformationByCategoryActionFailure, getInformationByCategoryActionSuccess} from "./getInformationsByCategory.action";


@Injectable()
export class GetInformationsByCategoryEffect {

  private _service = inject(GetInformationsByCategoryService);
  private action$ = inject(Actions);

  _onGetInformationByCategory = createEffect((): any =>
    this.action$.pipe(
      ofType(getInformationsByCategoryAction),
      switchMap((action) => {
        return this._service.getInformationsByCategory(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getInformationByCategoryActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getInformationByCategoryActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
