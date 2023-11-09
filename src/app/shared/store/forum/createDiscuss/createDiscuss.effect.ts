import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {
    createDiscussAction,
    createDiscussActionFailure,
    createDiscussActionSuccess,
} from "./createDiscuss.action";
import {CreateDiscussService} from "./createDiscuss.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class CreateDiscussEffect {

  private _service = inject(CreateDiscussService);
  private action$ = inject(Actions);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  _onCreateDiscuss= createEffect((): any =>
    this.action$.pipe(
      ofType(createDiscussAction),
      switchMap((action) => {
        return this._service.createDiscuss(action.requestData).pipe(
          switchMap(data => {
              this.toastr.success("Комментарий оставлен");
              return of(
                createDiscussActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createDiscussActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
