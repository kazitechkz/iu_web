import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSubTournamentRivalsService} from "./getSubTournamentRivals.service";
import {
  getSubTournamentRivalsAction, getSubTournamentRivalsActionFailure,
  getSubTournamentRivalsActionSuccess
} from "./getSubTournamentRivals.action";

@Injectable()
export class GetSubTournamentRivalsEffect {

  private _service = inject(GetSubTournamentRivalsService);
  private action$ = inject(Actions);

  _onGetSubTournamentRivals = createEffect((): any =>
    this.action$.pipe(
      ofType(getSubTournamentRivalsAction),
      switchMap((action) => {
        return this._service.getSubTournamentRivals(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSubTournamentRivalsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSubTournamentRivalsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
