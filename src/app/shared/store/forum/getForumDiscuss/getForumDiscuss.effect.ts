import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetForumDiscussService} from "./getForumDiscuss.service";
import {
    getForumDiscussAction, getForumDiscussActionFailure, getForumDiscussActionSuccess
} from "./getForumDiscuss.action";

@Injectable()
export class GetForumDiscussEffect {

  private _service = inject(GetForumDiscussService);
  private action$ = inject(Actions);

  _onGetForumDiscuss = createEffect((): any =>
    this.action$.pipe(
      ofType(getForumDiscussAction),
      switchMap((action) => {
        return this._service.getForumDiscussByForumId(action.requestData).pipe(
          switchMap(data => {
              return of(
                getForumDiscussActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getForumDiscussActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
