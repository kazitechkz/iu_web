import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StatByUserService} from "./stat-by-user.service";
import {catchError, of, switchMap} from "rxjs";
import {
  StatByUserAction, StatByUserFailure, StatByUserSuccess,
} from "./stat-by-user.action";


@Injectable()
export class StatByUserEffect {

    private _service = inject(StatByUserService);
    private action$ = inject(Actions);

    _onStatByUserId = createEffect((): any =>
        this.action$.pipe(
            ofType(StatByUserAction),
            switchMap((action) => {
                return this._service.statByUser(action.request).pipe(
                    switchMap(data => {
                            return of(
                                StatByUserSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(StatByUserFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
