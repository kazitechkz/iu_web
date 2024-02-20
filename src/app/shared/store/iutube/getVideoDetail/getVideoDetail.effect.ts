import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetVideoDetailService} from "./getVideoDetail.service";
import {
  getVideoDetail,
  getVideoDetailFailure,
  getVideoDetailSuccess
} from "./getVideoDetail.action";


@Injectable()
export class GetVideoDetailEffect {

  private _service = inject(GetVideoDetailService);
  private action$ = inject(Actions);

  _onGetVideoDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(getVideoDetail),
      switchMap((action) => {
        return this._service.getVideoDetailService(action.requestData).pipe(
          switchMap(data => {
              return of(
                getVideoDetailSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getVideoDetailFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
