import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetImportantNewsService} from "./getImportantNews.service";
import {
    getImportantNewsAction, getForumActionFailure, getForumActionSuccess
} from "./getImportantNews.action";

@Injectable()
export class GetImportantNewsEffect {

  private _service = inject(GetImportantNewsService);
  private action$ = inject(Actions);

  _onGetForum = createEffect((): any =>
    this.action$.pipe(
      ofType(getImportantNewsAction),
      switchMap((action) => {
        return this._service.getForumById(action.requestData).pipe(
          switchMap(data => {
              return of(
                getForumActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getForumActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
