import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAllVideosService} from "./getAllVideos.service";
import {getAllVideosAction, getAllVideosActionFailure, getAllVideosActionSuccess} from "./getAllVideos.action";


@Injectable()
export class GetAllVideosEffect {

  private _service = inject(GetAllVideosService);
  private action$ = inject(Actions);

  _onGetAllVideos = createEffect((): any =>
    this.action$.pipe(
      ofType(getAllVideosAction),
      switchMap((action) => {
        return this._service.getAllVideos(action.requestData).pipe(
          switchMap(data => {
              return of(
                getAllVideosActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAllVideosActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
