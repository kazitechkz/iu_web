import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {fullStatAction, fullStatFailureAction, fullStatSuccessAction} from "./fullStat.action";
import {FullStatService} from "./fullStat.service";

@Injectable()
export class FullStatEffect {

  private _service = inject(FullStatService);
  private action$ = inject(Actions);

  _onFullStat = createEffect((): any =>
    this.action$.pipe(
      ofType(fullStatAction),
      switchMap((action) => {
        return this._service.fullStat(action.requestData).pipe(
          switchMap(data => {
              return of(
                fullStatSuccessAction({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(fullStatFailureAction({errors: _error}))
          )
        )
      }),
    ),
  );
}
