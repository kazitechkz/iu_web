import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {
    ratingForumAction, ratingForumActionFailure, ratingForumActionSuccess,
} from "./ratingForum.action";
import {RatingForumService} from "./ratingForum.service";
import {ToastrService} from "ngx-toastr";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";

@Injectable()
export class RatingForumEffect {

  private _service = inject(RatingForumService);
  private action$ = inject(Actions);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  _onCreateForum = createEffect((): any =>
    this.action$.pipe(
      ofType(ratingForumAction),
      switchMap((action) => {
        return this._service.ratingForum(action.requestData).pipe(
          switchMap(data => {
              return of(
                ratingForumActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(ratingForumActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
