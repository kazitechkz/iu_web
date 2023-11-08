import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {
  createForumAction,
  createForumActionFailure,
  createForumActionSuccess
} from "./createForum.action";
import {CreateForumService} from "./createForum.service";
import {ToastrService} from "ngx-toastr";
import {registerActionSuccess} from "../../auth/register/Register.action";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";

@Injectable()
export class CreateForumEffect {

  private _service = inject(CreateForumService);
  private action$ = inject(Actions);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  _onCreateForum = createEffect((): any =>
    this.action$.pipe(
      ofType(createForumAction),
      switchMap((action) => {
        return this._service.createForum(action.requestData).pipe(
          switchMap(data => {
              this.toastr.success("Успешно создана тема для форума")
              this.router.navigate(["/" + RoutesName.forumDetail + "/" + data.data?.id])
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
