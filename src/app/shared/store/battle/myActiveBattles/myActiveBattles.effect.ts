import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {MyActiveBattlesService} from "./myActiveBattles.service";
import {
  myActiveBattlesAction, myActiveBattlesActionFailure, myActiveBattlesActionSuccess,
} from "./myActiveBattles.action";

@Injectable()
export class MyActiveBattlesEffect {

  private _service = inject(MyActiveBattlesService);
  private action$ = inject(Actions);

  _onMyActiveBattles = createEffect((): any =>
    this.action$.pipe(
      ofType(myActiveBattlesAction),
      switchMap((action) => {
        return this._service.myActiveBattles().pipe(
          switchMap(data => {
              return of(
                  myActiveBattlesActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(myActiveBattlesActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
