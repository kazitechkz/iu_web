import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetCareerQuizGroupListService} from "./getCareerQuizGroupList.service";
import {
  getCareerQuizGroupListAction,
  getCareerQuizGroupListActionFailure,
  getCareerQuizGroupListActionSuccess
} from "./getCareerQuizGroupList.action";

@Injectable()
export class GetCareerQuizGroupListEffect {

  private _service = inject(GetCareerQuizGroupListService);
  private action$ = inject(Actions);

  _onGetCareerQuizGroupList = createEffect((): any =>
    this.action$.pipe(
      ofType(getCareerQuizGroupListAction),
      switchMap((action) => {
        return this._service.getCareerQuizGroupList().pipe(
          switchMap(data => {
              return of(
                getCareerQuizGroupListActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getCareerQuizGroupListActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
