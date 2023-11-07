import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AllForumService} from "./allForum.service";
import {
  allForumAction, allForumActionFailure, allForumActionSuccess,
} from "./allForum.action";

@Injectable()
export class AllForumEffect {

  private _service = inject(AllForumService);
  private action$ = inject(Actions);

  _onAllForum = createEffect((): any =>
    this.action$.pipe(
      ofType(allForumAction),
      switchMap((action) => {
        return this._service.allForumService(action.requestData).pipe(
          switchMap(data => {
              return of(
                allForumActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(allForumActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
