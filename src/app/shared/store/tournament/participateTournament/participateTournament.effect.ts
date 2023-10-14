import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {ParticipateTournamentService} from "./participateTournament.service";
import {
  OnParticipateTournamentAction,
  OnParticipateTournamentActionFailure,
  OnParticipateTournamentActionSuccess
} from "./participateTournament.action";

@Injectable()
export class ParticipateTournamentEffect {

  private _service = inject(ParticipateTournamentService);
  private action$ = inject(Actions);

  _onParticipateTournament = createEffect((): any =>
    this.action$.pipe(
      ofType(OnParticipateTournamentAction),
      switchMap((action) => {
        return this._service.participateTournament(action.requestData).pipe(
          switchMap(data => {
              return of(
                  OnParticipateTournamentActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(OnParticipateTournamentActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
