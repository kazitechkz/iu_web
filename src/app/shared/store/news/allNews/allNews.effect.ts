import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AllNewsService} from "./allNews.service";
import {
  allNewsAction, allNewsActionFailure, allNewsActionSuccess
} from "./allNews.action";

@Injectable()
export class AllNewsEffect {

  private _service = inject(AllNewsService);
  private action$ = inject(Actions);

  _onAllNews = createEffect((): any =>
    this.action$.pipe(
      ofType(allNewsAction),
      switchMap((action) => {
        return this._service.allNews(action.requestData).pipe(
          switchMap(data => {
              return of(
                allNewsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(allNewsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
