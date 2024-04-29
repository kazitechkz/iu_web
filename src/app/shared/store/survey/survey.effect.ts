import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {SurveyService} from "./survey.service";
import {
  surveyAnswerAction, surveyAnswerActionFailure, surveyAnswerActionSuccess,
  surveyGetAction,
  surveyGetActionFailure,
  surveyGetActionSuccess,
} from "./survey.action";

@Injectable()
export class SurveyEffect {

  private _service = inject(SurveyService);
  private action$ = inject(Actions);

  _onSurveys = createEffect((): any =>
    this.action$.pipe(
      ofType(surveyGetAction),
      switchMap((action) => {
        return this._service.getSurveys(action.locale_id).pipe(
          switchMap(data => {
              return of(
                surveyGetActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(surveyGetActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );

  _onAnswerSurveys = createEffect((): any =>
    this.action$.pipe(
      ofType(surveyAnswerAction),
      switchMap((action) => {
        return this._service.answerSurveys(action.req).pipe(
          switchMap(data => {
              return of(
                surveyAnswerActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(surveyAnswerActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
