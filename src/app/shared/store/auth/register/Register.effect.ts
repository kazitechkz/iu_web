import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RegisterService} from "./Register.service";
import {RegisterActionTypes} from "./Register.action.types";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {ResponseData} from "../../response_data";
import {registerAction, registerActionFailure, registerActionSuccess} from "./Register.action";
import {RegisterRequest} from "./RegisterRequest";
import {ToastrService} from "ngx-toastr";
import {data} from "autoprefixer";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffect {

    private action$ = inject(Actions);
    private service = inject(RegisterService);
    private toastr = inject(ToastrService);
    private router = inject(Router);


  on_register$ = createEffect((): any =>
    this.action$.pipe(
      ofType(registerAction),
      switchMap(action =>{
          return this.service.RegisterUser(action.requestData).pipe(
              switchMap(data=>{
                  this.toastr.success(data.message??"Success");
                      return of(
                          registerActionSuccess({ responseData: data }),
                      );
                  }
              ),
              catchError((_error) => of(registerActionFailure({ errors: _error })))
          );
        }
      )
    ),
  );

    registerSuccess$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(registerActionSuccess),
                exhaustMap(() => this.router.navigate(['/auth/login']))
            );
        },
        { dispatch: false }
    );


}
