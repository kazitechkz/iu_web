import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {HottestInformationService} from "./hottestInformation.service";
import {hottestInformationAction, hottestInformationActionFailure, hottestInformationActionSuccess} from "./hottestInformation.action";


@Injectable()
export class HottestInformationEffect {

  private _service = inject(HottestInformationService);
  private action$ = inject(Actions);

  _onGetHottestInformation = createEffect((): any =>
    this.action$.pipe(
      ofType(hottestInformationAction),
      switchMap((action) => {
        return this._service.getHottestInformation().pipe(
          switchMap(data => {
              return of(
                  hottestInformationActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(hottestInformationActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
