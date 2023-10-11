import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetTournamentDetailService} from "./getTournamentDetail.service";
import {
    getTournamentDetailAction,
    getTournamentDetailActionFailure,
    getTournamentDetailActionSuccess
} from "./getTournamentDetail.action";

@Injectable()
export class GetTournamentDetailEffect {

  private _service = inject(GetTournamentDetailService);
  private action$ = inject(Actions);

  _onGetTournamentDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(getTournamentDetailAction),
      switchMap((action) => {
        return this._service.getTournamentDetail(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getTournamentDetailActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getTournamentDetailActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
