import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetUntStatService} from "./getUntStat.service";
import {getUntStatAction, getUntStatActionFailure, getUntStatActionSuccess} from "./getUntStat.action";


@Injectable()
export class GetUntStatEffect {

  private _service = inject(GetUntStatService);
  private action$ = inject(Actions);

  _onGetStat= createEffect((): any =>
    this.action$.pipe(
      ofType(getUntStatAction),
      switchMap((action) => {
        return this._service.getUntStat().pipe(
          switchMap(data => {
              return of(
                getUntStatActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getUntStatActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
