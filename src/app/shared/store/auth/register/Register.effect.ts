import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RegisterService} from "./Register.service";
import {RegisterActionTypes} from "./Register.action.types";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {ResponseData} from "../../response_data";
import {registerAction, registerActionFailure, registerActionSuccess} from "./Register.action";
import {RegisterRequest} from "./RegisterRequest";

@Injectable()
export class RegisterEffect {

  constructor(private action$: Actions, private service: RegisterService) {}

  _on_register = createEffect((): any =>
    this.action$.pipe(
      ofType(registerAction),
      switchMap(action =>
        this.service.RegisterUser(action.requestData).pipe(
          switchMap(data =>
            of(
              registerActionSuccess({ responseData: data }),
              console.log("wow")
            )
          ),
          catchError((_error) => of(registerActionFailure({ errors: _error })))
        ),
      )
    ),
    { dispatch: false }
  );


}
