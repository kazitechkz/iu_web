
import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, of, switchMap} from "rxjs";
import {GetAttemptByPromoCodeService} from "./getAttemptByPromoCode.service";
import {
    getAttemptByPromoCodeAction,
    getAttemptByPromoCodeActionSuccess, getAttemptByPromoCodeActionFailure
} from "./getAttemptByPromoCode.action";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class GetAttemptByPromoCodeEffect {

  private _service = inject(GetAttemptByPromoCodeService);
  private action$ = inject(Actions);
  private _route = inject(Router);

  _onGetAttemptByPromoCode = createEffect((): any =>
    this.action$.pipe(
      ofType(getAttemptByPromoCodeAction),
      switchMap((action) => {
        return this._service.getAttemptByPromoCode(action.requestData).pipe(
          switchMap(data => {
              this._route.navigate([RoutesName.passUntExam + "/" + data.data?.id ?? 0])
              return of(
                  getAttemptByPromoCodeActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAttemptByPromoCodeActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
