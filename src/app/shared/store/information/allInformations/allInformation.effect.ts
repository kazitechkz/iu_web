import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AllInformationsService} from "./allInformations.service";
import {allInformationsAction, allInformationsActionFailure, allInformationsActionSuccess} from "./allInformations.action";


@Injectable()
export class AllInformationEffect {

  private _service = inject(AllInformationsService);
  private action$ = inject(Actions);

  _onAllInformations = createEffect((): any =>
    this.action$.pipe(
      ofType(allInformationsAction),
      switchMap((action) => {
        return this._service.getAllInformations(action.requestData).pipe(
          switchMap(data => {
              return of(
                  allInformationsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(allInformationsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
