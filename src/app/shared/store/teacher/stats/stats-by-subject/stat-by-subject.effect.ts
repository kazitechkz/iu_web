import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StatBySubjectService} from "./stat-by-subject.service";
import {catchError, of, switchMap} from "rxjs";
import {
  StatBySubjectIdAction, StatBySubjectIdFailure, StatBySubjectIdSuccess
} from "./stat-by-subject.action";


@Injectable()
export class StatBySubjectEffect {

    private _service = inject(StatBySubjectService);
    private action$ = inject(Actions);

    _onStatBySubjectId = createEffect((): any =>
        this.action$.pipe(
            ofType(StatBySubjectIdAction),
            switchMap((action) => {
                return this._service.statBySubjectID(action).pipe(
                    switchMap(data => {
                            return of(
                                StatBySubjectIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(StatBySubjectIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
