import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {StatBySubjectIdService} from "./statBySubjectId.service";
import {statBySubjectIdAction, StatBySubjectIdSuccessAction,StatBySubjectIdFailureAction} from "./statBySubjectId.action";

@Injectable()
export class StatBySubjectIdEffect {

  private _service = inject(StatBySubjectIdService);
  private action$ = inject(Actions);

  _onGetStatBySubjectId = createEffect((): any =>
    this.action$.pipe(
      ofType(statBySubjectIdAction),
      switchMap((action) => {
        return this._service.getStatBySubjectId(action.requestData).pipe(
          switchMap(data => {
              return of(
                StatBySubjectIdSuccessAction({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(StatBySubjectIdFailureAction({errors: _error}))
          )
        )
      }),
    ),
  );
}
