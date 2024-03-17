import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAIAnswerOnQuestionService} from "./getAIAnswerOnQuestion.service";
import {
  getAIAnswerOnQuestionAction,
  getAIAnswerOnQuestionActionFailure,
  getAIAnswerOnQuestionActionSuccess
} from "./getAIAnswerOnQuestion.action";


@Injectable()
export class GetAIAnswerOnQuestionEffect {

  private _service = inject(GetAIAnswerOnQuestionService);
  private action$ = inject(Actions);

  _onAIAnswerOnQuestion = createEffect((): any =>
    this.action$.pipe(
      ofType(getAIAnswerOnQuestionAction),
      switchMap((action) => {
        return this._service.getAIAnswerOnQuestion(action.requestData).pipe(
          switchMap(data => {
              return of(
                getAIAnswerOnQuestionActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getAIAnswerOnQuestionActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
