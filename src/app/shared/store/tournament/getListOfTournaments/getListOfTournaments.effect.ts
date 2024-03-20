import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
  getListOfTournamentsAction,
  getListOfTournamentsActionFailure,
  getListOfTournamentsActionSuccess
} from "./getListOfTournaments.action";
import {GetListOfTournamentsService} from "./getListOfTournaments.service";


@Injectable()
export class GetListOfTournamentsEffect {

  private _service = inject(GetListOfTournamentsService);
  private action$ = inject(Actions);

  _onGetListOfTournaments = createEffect((): any =>
    this.action$.pipe(
      ofType(getListOfTournamentsAction),
      switchMap((action) => {
        return this._service.getListOfTournaments(action.requestData).pipe(
          switchMap(data => {
              return of(
                getListOfTournamentsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getListOfTournamentsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
