import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSubTournamentWinnersService} from "./getSubTournamentWinners.service";
import {
  getSubTournamentWinnersAction, getSubTournamentWinnersActionFailure,
  getSubTournamentWinnersActionSuccess
} from "./getSubTournamentWinners.action";

@Injectable()
export class GetSubTournamentWinnersEffect {

  private _service = inject(GetSubTournamentWinnersService);
  private action$ = inject(Actions);

  _onGetSubTournamentWinners = createEffect((): any =>
    this.action$.pipe(
      ofType(getSubTournamentWinnersAction),
      switchMap((action) => {
        return this._service.getSubTournamentWinners(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSubTournamentWinnersActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSubTournamentWinnersActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
