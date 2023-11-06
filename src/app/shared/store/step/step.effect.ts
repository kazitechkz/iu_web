import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StepService} from "./step.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {stepAction, stepActionSuccess, stepActionFailure} from "./step.action";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";


@Injectable()
export class StepEffect {

    private _service = inject(StepService);
    private action$ = inject(Actions);
    private _toastr = inject(ToastrService);
    private _localStorage = inject(SessionService);
    private _route = inject(Router);

    _onStep = createEffect((): any =>
        this.action$.pipe(
            ofType(stepAction),
            switchMap((action) => {
                return this._service.getSteps(action.localeId).pipe(
                    switchMap(data => {
                            return of(
                                stepActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(stepActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
