import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetBattleSubjectsService} from "./getBattleSubjects.service";
import {
  getBattleSubjectsAction,getBattleSubjectsActionSuccess ,getBattleSubjectsActionFailure ,
} from "./getBattleSubjects.action";

@Injectable()
export class GetBattleSubjectsEffect {

  private _service = inject(GetBattleSubjectsService);
  private action$ = inject(Actions);

  _onGetBattleSubjects = createEffect((): any =>
    this.action$.pipe(
      ofType(getBattleSubjectsAction),
      switchMap((action) => {
        return this._service.getBattleSubjects(action.requestData).pipe(
          switchMap(data => {
              return of(
                getBattleSubjectsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getBattleSubjectsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
