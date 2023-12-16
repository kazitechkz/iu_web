import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetActiveBattlesService} from "./getActiveBattles.service";
import {
  getActiveBattlesAction, getActiveBattlesActionFailure, getActiveBattlesActionSuccess,
} from "./getActiveBattles.action";

@Injectable()
export class GetActiveBattlesEffect {

  private _service = inject(GetActiveBattlesService);
  private action$ = inject(Actions);

  _onGetActiveBattles = createEffect((): any =>
    this.action$.pipe(
      ofType(getActiveBattlesAction),
      switchMap((action) => {
        return this._service.getActiveBattles(action.requestData).pipe(
          switchMap(data => {
              return of(
                getActiveBattlesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getActiveBattlesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
