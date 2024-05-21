import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {UtmService} from "./utm.service";
import {
  UtmAction, UtmSuccess, UtmFailure,
} from "./utm.action";

@Injectable()
export class UtmEffect {

  private _service = inject(UtmService);
  private action$ = inject(Actions);

  _onUtm = createEffect((): any =>
    this.action$.pipe(
      ofType(UtmAction),
      switchMap((action) => {
        return this._service.sendUtm(action.req).pipe(
          switchMap(data => {
              return of(
                UtmSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(UtmFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
