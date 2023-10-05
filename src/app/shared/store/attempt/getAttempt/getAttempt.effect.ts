import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, of, switchMap} from "rxjs";
import {GetAttemptService} from "./getAttempt.service";
import {getAttemptAction, getAttemptActionFailure, getAttemptActionSuccess} from "./getAttempt.action";

@Injectable()
export class GetAttemptEffect {

  private _service = inject(GetAttemptService);
  private action$ = inject(Actions);

  _onGetAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(getAttemptAction),
      switchMap((action) => {
        return this._service.getAttempt(action.requestData).pipe(
          switchMap(data => {
              return of(
                getAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
