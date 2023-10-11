import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAllTournamentService} from "./getAllTournament.service";
import {
  getAllTournamentAction,
  getAllTournamentActionFailure,
  getAllTournamentActionSuccess
} from "./getAllTournament.action";

@Injectable()
export class GetAllTournamentEffect {

  private _service = inject(GetAllTournamentService);
  private action$ = inject(Actions);

  _onGetAllTournament = createEffect((): any =>
    this.action$.pipe(
      ofType(getAllTournamentAction),
      switchMap((action) => {
        return this._service.getAllTournament().pipe(
          switchMap(data => {
              return of(
                getAllTournamentActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAllTournamentActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
