import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StatByAttemptService} from "./stat-by-attempt.service";
import {catchError, of, switchMap} from "rxjs";
import {
  StatExamByIdAction,
  StatExamByIdFailure,
  StatExamByIdSuccess
} from "./stat-by-attempt.action";


@Injectable()
export class StatByAttemptEffect {

    private _service = inject(StatByAttemptService);
    private action$ = inject(Actions);

    _onStatExamById = createEffect((): any =>
        this.action$.pipe(
            ofType(StatExamByIdAction),
            switchMap((action) => {
                return this._service.statExamByID(action.attempt_id, action.user_id).pipe(
                    switchMap(data => {
                            return of(
                                StatExamByIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(StatExamByIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
