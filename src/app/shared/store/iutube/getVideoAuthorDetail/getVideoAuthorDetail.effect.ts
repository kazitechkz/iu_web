import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetVideoAuthorDetailService} from "./getVideoAuthorDetail.service";
import {
  getVideoAuthorDetail,
  getVideoAuthorDetailFailure,
  getVideoAuthorDetailSuccess
} from "./getVideoAuthorDetail.action";


@Injectable()
export class GetVideoAuthorDetailEffect {

  private _service = inject(GetVideoAuthorDetailService);
  private action$ = inject(Actions);

  _onGetVideoAuthorDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(getVideoAuthorDetail),
      switchMap((action) => {
        return this._service.getVideoAuthorDetailService(action.requestData).pipe(
          switchMap(data => {
              return of(
                getVideoAuthorDetailSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getVideoAuthorDetailFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
