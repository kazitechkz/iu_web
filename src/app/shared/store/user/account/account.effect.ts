import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AccountService} from "./account.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {
  accountAction,
  accountActionFailure,
  accountActionSuccess,
  accountChangeAction, accountChangeActionFailure,
  accountChangeActionSuccess
} from "./account.action";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {Me} from "../../../models/user.model";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {LocalKeysConstants} from "../../../../core/constants/local-keys.constants";
import {registerActionSuccess} from "../../auth/register/Register.action";

@Injectable()
export class AccountEffect {

    private _service = inject(AccountService);
    private action$ = inject(Actions);
    private _toastr = inject(ToastrService);
    private _localStorage = inject(SessionService);
    private _route = inject(Router);

    _onAccount = createEffect((): any =>
        this.action$.pipe(
            ofType(accountAction),
            switchMap((action) => {
                return this._service.meUser().pipe(
                    switchMap(data => {
                            // this._toastr.success('Success')
                            this._localStorage.setDataToLocalStorage(LocalKeysConstants.user, data.data as Me)
                            // this._route.navigate([RoutesName.dashboard]).then(null)
                            return of(
                                accountActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(accountActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onChangeAccount = createEffect((): any =>
        this.action$.pipe(
            ofType(accountChangeAction),
            switchMap((action) => {
                return this._service.updateUser(action.request).pipe(
                    switchMap(data => {
                            return of(
                                accountChangeActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(accountChangeActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
