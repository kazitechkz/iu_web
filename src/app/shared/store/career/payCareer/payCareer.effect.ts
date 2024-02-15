import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {PayCareerService} from "./payCareer.service";
import {
  payCareerAction,
  payCareerActionSuccess,
  payCareerActionFailure,

} from "./payCareer.action";

@Injectable()
export class PayCareerEffect {

  private _service = inject(PayCareerService);
  private action$ = inject(Actions);

  _onPayCareer = createEffect((): any =>
    this.action$.pipe(
      ofType(payCareerAction),
      switchMap((action) => {
        return this._service.payCareer(action.requestData).pipe(
          switchMap(data => {
              return of(
                  payCareerActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(payCareerActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
