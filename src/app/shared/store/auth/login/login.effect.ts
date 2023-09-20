import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "./login.service";
import {LoginActionTypes} from "./login.action.types";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {ResponseData} from "../../response_data";
import {loginAction, loginActionFailure, loginActionSuccess} from "./login.action";
import {LoginRequest} from "./loginRequest";

@Injectable()
export class LoginEffect {

  constructor(private action$: Actions, private service: LoginService) {}

  _onLogin = createEffect((): any =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap(action =>
        this.service.loginUser(action.requestData).pipe(
          switchMap(data =>
            of(
              loginActionSuccess({ responseData: data }),
            )
          ),
          catchError((_error) => of(loginActionFailure({ errors: _error })))
        ),
      )
    ),
    { dispatch: false }
  );


}
