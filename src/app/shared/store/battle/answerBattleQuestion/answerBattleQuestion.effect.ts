import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AnswerBattleQuestionService} from "./answerBattleQuestion.service";
import {
  answerBattleQuestionAction,
  answerBattleQuestionActionFailure,
  answerBattleQuestionActionSuccess,

} from "./answerBattleQuestion.action";

@Injectable()
export class AnswerBattleQuestionEffect {

  private _service = inject(AnswerBattleQuestionService);
  private action$ = inject(Actions);

  _onAnswerBattleQuestion = createEffect((): any =>
    this.action$.pipe(
      ofType(answerBattleQuestionAction),
      switchMap((action) => {
        return this._service.answerBattleQuestion(action.requestData).pipe(
          switchMap(data => {
              return of(
                answerBattleQuestionActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(answerBattleQuestionActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
