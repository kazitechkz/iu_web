import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {
  PassSubStepSuccessAction, PassSubStepFailureAction, PassSubStepAction
} from "./passSubStep.action";
import {PassSubStepService} from "./passSubStep.service";

@Injectable()
export class PassSubStepEffect {

  private _service = inject(PassSubStepService);
  private action$ = inject(Actions);

  _onPassSubStepBySubCategoryIdStat = createEffect((): any =>
    this.action$.pipe(
      ofType(PassSubStepAction),
      switchMap((action) => {
        return this._service.findSubStepBySubCategoryId(action.requestData).pipe(
          switchMap(data => {
              return of(
                PassSubStepSuccessAction({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(PassSubStepFailureAction({errors: _error}))
          )
        )
      }),
    ),
  );
}
