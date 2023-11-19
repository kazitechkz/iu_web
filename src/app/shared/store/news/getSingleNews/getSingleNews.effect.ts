import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSingleNewsService} from "./getSingleNews.service";
import {
    getSingleNewsAction, getSingleNewsActionFailure, getSingleNewsActionSuccess
} from "./getSingleNews.action";

@Injectable()
export class GetSingleNewsEffect {

  private _service = inject(GetSingleNewsService);
  private action$ = inject(Actions);

  _onGetSingleNews = createEffect((): any =>
    this.action$.pipe(
      ofType(getSingleNewsAction),
      switchMap((action) => {
        return this._service.getSingleNews(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSingleNewsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSingleNewsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
