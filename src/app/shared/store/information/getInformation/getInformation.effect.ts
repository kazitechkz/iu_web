import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetInformationService} from "./getInformation.service";
import {getInformationAction, getInformationActionFailure, getInformationActionSuccess} from "./getInformation.action";


@Injectable()
export class GetInformationEffect {

  private _service = inject(GetInformationService);
  private action$ = inject(Actions);

  _onGetInformation = createEffect((): any =>
    this.action$.pipe(
      ofType(getInformationAction),
      switchMap((action) => {
        return this._service.getInformation(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getInformationActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getInformationActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
