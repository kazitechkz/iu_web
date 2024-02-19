import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetMainVideosService} from "./getMainVideos.service";
import {getMainVideosAction, getMainVideosActionFailure, getMainVideosActionSuccess} from "./getMainVideos.action";


@Injectable()
export class GetMainVideosEffect {

  private _service = inject(GetMainVideosService);
  private action$ = inject(Actions);

  _onGetMainVideos = createEffect((): any =>
    this.action$.pipe(
      ofType(getMainVideosAction),
      switchMap((action) => {
        return this._service.getMainVideos().pipe(
          switchMap(data => {
              return of(
                getMainVideosActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getMainVideosActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
