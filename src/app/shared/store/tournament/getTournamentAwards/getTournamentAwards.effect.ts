import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetTournamentAwardsService} from "./getTournamentAwards.service";
import {
  getTournamentAwardsAction,
  getTournamentAwardsActionFailure,
  getTournamentAwardsActionSuccess
} from "./getTournamentAwards.action";

@Injectable()
export class GetTournamentAwardsEffect {

  private _service = inject(GetTournamentAwardsService);
  private action$ = inject(Actions);

  _onGetTournamentAwards = createEffect((): any =>
    this.action$.pipe(
      ofType(getTournamentAwardsAction),
      switchMap((action) => {
        return this._service.getTournamentAwards(action.requestData).pipe(
          switchMap(data => {
              return of(
                getTournamentAwardsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getTournamentAwardsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
