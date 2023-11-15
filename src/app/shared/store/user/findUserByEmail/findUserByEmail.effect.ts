import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {FindUserByEmailService} from "./findUserByEmail.service";
import {
    findUserByEmailAction, findUserByEmailActionFailure, findUserByEmailActionSuccess,
} from "./findUserByEmail.action";

@Injectable()
export class FindUserByEmailEffect {
  private _service = inject(FindUserByEmailService);
  private action$ = inject(Actions);
  _onFindUserByEmailActionEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(findUserByEmailAction),
      switchMap((action) => {
        return this._service.findUserByEmail(action.requestData).pipe(
          switchMap(data => {
              return of(
                  findUserByEmailActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(findUserByEmailActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
