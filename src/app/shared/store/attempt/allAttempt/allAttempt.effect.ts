import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {allAttemptAction, allAttemptActionFailure, allAttemptActionSuccess} from "./allAttempt.action";
import {AllAttemptService} from "./allAttempt.service";

@Injectable()
export class AllAttemptEffect {

  private _service = inject(AllAttemptService);
  private action$ = inject(Actions);

  _onAllAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(allAttemptAction),
      switchMap((action) => {
        return this._service.allAttempt(action.requestData).pipe(
          switchMap(data => {
              return of(
                allAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(allAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
