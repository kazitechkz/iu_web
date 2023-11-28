import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FactService} from "./fact.service";
import {catchError, distinct, exhaustMap, map, of, switchMap} from "rxjs";
import {factAction, factActionFailure, factActionSuccess} from "./fact.action";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";


@Injectable()
export class FactEffect {

    private _service = inject(FactService);
    private action$ = inject(Actions);
    private _toastr = inject(ToastrService);
    private _localStorage = inject(SessionService);
    private _route = inject(Router);

    _onFact = createEffect((): any =>
        this.action$.pipe(
            ofType(factAction),
            switchMap((action) => {
                return this._service.getFacts(action.subjectId).pipe(
                    switchMap(data => {
                            return of(
                                factActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(factActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
