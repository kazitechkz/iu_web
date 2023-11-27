import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DashboardService} from "./dashboard.service";
import {catchError, of, switchMap} from "rxjs";
import {
    StatDashboardAction, StatDashboardFailure, StatDashboardSuccess
} from "./dashboard.action";


@Injectable()
export class TeacherDashboardEffect {

    private _service = inject(DashboardService);
    private action$ = inject(Actions);

    _onStatDashboard = createEffect((): any =>
        this.action$.pipe(
            ofType(StatDashboardAction),
            switchMap((action) => {
                return this._service.statDashboard().pipe(
                    switchMap(data => {
                            return of(
                                StatDashboardSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(StatDashboardFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
