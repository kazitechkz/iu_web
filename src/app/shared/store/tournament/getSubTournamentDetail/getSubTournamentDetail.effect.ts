import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSubTournamentDetailService} from "./getSubTournamentDetail.service";
import {
  getSubTournamentDetailAction, getSubTournamentDetailActionFailure, getSubTournamentDetailActionSuccess,
} from "./getSubTournamentDetail.action";

@Injectable()
export class GetSubTournamentDetailEffect {

  private _service = inject(GetSubTournamentDetailService);
  private action$ = inject(Actions);

  _onGetSubTournamentDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(getSubTournamentDetailAction),
      switchMap((action) => {
        return this._service.getSubTournamentDetail(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSubTournamentDetailActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSubTournamentDetailActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
