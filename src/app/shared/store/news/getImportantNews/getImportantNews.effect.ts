import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetImportantNewsService} from "./getImportantNews.service";
import {
    getImportantNewsAction, getImportantNewsActionFailure, getImportantNewsActionSuccess
} from "./getImportantNews.action";

@Injectable()
export class GetImportantNewsEffect {

  private _service = inject(GetImportantNewsService);
  private action$ = inject(Actions);

  _onGetImportantNews = createEffect((): any =>
    this.action$.pipe(
      ofType(getImportantNewsAction),
      switchMap((action) => {
        return this._service.getImportantNews().pipe(
          switchMap(data => {
              return of(
                getImportantNewsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getImportantNewsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
