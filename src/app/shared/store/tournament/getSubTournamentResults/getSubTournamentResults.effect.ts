import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSubTournamentResultsService} from "./getSubTournamentResults.service";
import {
  getSubTournamentResultsAction, getSubTournamentResultsActionFailure,
  getSubTournamentResultsActionSuccess
} from "./getSubTournamentResults.action";

@Injectable()
export class GetSubTournamentResultsEffect {

  private _service = inject(GetSubTournamentResultsService);
  private action$ = inject(Actions);

  _onGetSubTournamentResults = createEffect((): any =>
    this.action$.pipe(
      ofType(getSubTournamentResultsAction),
      switchMap((action) => {
        return this._service.getSubTournamentResults(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSubTournamentResultsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSubTournamentResultsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
