import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {CreateTournamentAttemptService} from "./createTournamentAttempt.service";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {
  createTournamentAttemptAction,
  createTournamentAttemptActionFailure,
  createTournamentAttemptActionSuccess
} from "./createTournamentAttempt.action";

@Injectable()
export class CreateTournamentAttemptEffect {

  private _service = inject(CreateTournamentAttemptService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _onGetAttempt = createEffect((): any =>
    this.action$.pipe(
      ofType(createTournamentAttemptAction),
      switchMap((action) => {
        return this._service.createAttempt(action.requestData).pipe(
          switchMap(data => {
            this._route.navigate([RoutesName.passUntExam + "/" + data.data?.attempt_id ?? 0])
              return of(
                createTournamentAttemptActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createTournamentAttemptActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
