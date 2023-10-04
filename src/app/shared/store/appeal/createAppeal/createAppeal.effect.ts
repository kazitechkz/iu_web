import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, of, switchMap} from "rxjs";
import {
    onCreateAppealAction, onCreateAppealActionFailure, onCreateAppealActionSuccess,
} from "./createAppeal.action";
import {CreateAppealService} from "./createAppeal.service";

@Injectable()
export class CreateAppealEffect {

  private _service = inject(CreateAppealService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _createAppeal = createEffect((): any =>
    this.action$.pipe(
      ofType(onCreateAppealAction),
      switchMap((action) => {
        return this._service.createAppeal(action.requestData).pipe(
          switchMap(data => {
              this._toastr.success(data.message??"");
              return of(
                onCreateAppealActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(onCreateAppealActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
