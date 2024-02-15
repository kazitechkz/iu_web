import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {
  resetPasswordAction,
  resetPasswordFailureAction,
  resetPasswordSuccessAction,
  sendResetTokenAction,
  sendResetTokenFailureAction,
  sendResetTokenSuccessAction
} from "./Reset.action";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {ResetService} from "./Reset.service";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class ResetEffect {
  private action$ = inject(Actions);
  private service = inject(ResetService);
  private toastr = inject(ToastrService);
  private router = inject(Router);


  onSendResetToken$ = createEffect(
    (): any =>
      this.action$.pipe(
        ofType(sendResetTokenAction),
        switchMap(action => {
          return this.service.SendResetToken(action.requestData).pipe(
            switchMap(actionData => {
              this.toastr.success(actionData.message ?? "Success");
              return of(
                sendResetTokenSuccessAction({responseData: actionData})
              )
            }),
            catchError((_error) => of(sendResetTokenFailureAction({errors: _error})))
          )
        })
      )
  );

  onResetPassword$ = createEffect(
    (): any =>
      this.action$.pipe(
        ofType(resetPasswordAction),
        switchMap((action) => {
          return this.service.ResetPassword(action.requestData).pipe(
            switchMap(actionData => {
              this.toastr.success(actionData.message ?? "Success");
              return of(
                resetPasswordSuccessAction({responseData: actionData})
              )
            }),
            catchError(_error => of(resetPasswordFailureAction({errors: _error})))
          )
        })
      )
  );

  resetSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(resetPasswordSuccessAction),
        exhaustMap(() => this.router.navigate([RoutesName.loginRoute]))
      )
    },
    {dispatch: false}
  )
}
