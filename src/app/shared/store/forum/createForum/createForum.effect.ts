import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
  createForumAction,
  createForumActionFailure,
  createForumActionSuccess
} from "./createForum.action";
import {CreateForumService} from "./createForum.service";

@Injectable()
export class CreateForumEffect {

  private _service = inject(CreateForumService);
  private action$ = inject(Actions);

  _onCreateForum = createEffect((): any =>
    this.action$.pipe(
      ofType(createForumAction),
      switchMap((action) => {
        return this._service.createForum(action.requestData).pipe(
          switchMap(data => {
              return of(
                createForumActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createForumActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
