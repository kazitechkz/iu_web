import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {FinishCareerQuizService} from "./finishCareerQuiz.service";
import {
  finishCareerQuizAction,
  finishCareerQuizActionSuccess,
  finishCareerQuizActionFailure,
} from "./finishCareerQuiz.action";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";

@Injectable()
export class FinishCareerQuizEffect {

  private _service = inject(FinishCareerQuizService);
  private action$ = inject(Actions);
  private router = inject(Router);

  _onFinishCareerQuiz = createEffect((): any =>
    this.action$.pipe(
      ofType(finishCareerQuizAction),
      switchMap((action) => {
        return this._service.finishCareerQuiz(action.requestData).pipe(
          switchMap(data => {
            // @ts-ignore
            this.router.navigate(["/" + RoutesName.resultCareerQuiz + "/" + data.data.toString()])
              return of(
                finishCareerQuizActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(finishCareerQuizActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

}
