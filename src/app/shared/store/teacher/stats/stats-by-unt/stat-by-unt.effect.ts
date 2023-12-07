import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StatByUntService} from "./stat-by-unt.service";
import {catchError, of, switchMap} from "rxjs";
import {StatByUNTAction, StatByUNTFailure, StatByUNTSuccess} from "./stat-by-unt.action";


@Injectable()
export class StatByUntEffect {

    private _service = inject(StatByUntService);
    private action$ = inject(Actions);

    _onStatByUNT = createEffect((): any =>
        this.action$.pipe(
            ofType(StatByUNTAction),
            switchMap((action) => {
                return this._service.statByUNT(action).pipe(
                    switchMap(data => {
                            return of(
                                StatByUNTSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(StatByUNTFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
