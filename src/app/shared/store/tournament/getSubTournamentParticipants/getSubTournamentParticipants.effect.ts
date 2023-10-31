import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetSubTournamentParticipantsService} from "./getSubTournamentParticipants.service";
import {
  getSubTournamentParticipantsAction, getSubTournamentParticipantsActionFailure,
  getSubTournamentParticipantsActionSuccess
} from "./getSubTournamentParticipants.action";

@Injectable()
export class GetSubTournamentParticipantsEffect {

  private _service = inject(GetSubTournamentParticipantsService);
  private action$ = inject(Actions);

  _onGetSubTournamentParticipants = createEffect((): any =>
    this.action$.pipe(
      ofType(getSubTournamentParticipantsAction),
      switchMap((action) => {
        return this._service.getSubTournamentParticipants(action.requestData).pipe(
          switchMap(data => {
              return of(
                getSubTournamentParticipantsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getSubTournamentParticipantsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
