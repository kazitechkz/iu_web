import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "./login.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {loginAction, loginActionFailure, loginActionSuccess} from "./login.action";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {UserInfo} from "../../../models/user.model";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class LoginEffect {

    private _service = inject(LoginService);
    private action$ = inject(Actions);
    private _toastr = inject(ToastrService);
    private _localStorage = inject(SessionService);
    private _route = inject(Router);

    _onLogin = createEffect((): any =>
        this.action$.pipe(
            ofType(loginAction),
            switchMap((action) => {
                return this._service.loginUser(action.requestData).pipe(
                    switchMap(data => {
                            this._toastr.success('Success')
                            this._localStorage.setUserToLocalStorage(data.data as UserInfo)
                            this._route.navigate([RoutesName.dashboard])
                            return of(
                                loginActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(loginActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );


}
