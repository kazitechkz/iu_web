import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {AnswerBattleQuestionService} from "./answerBattleQuestion.service";
import {
  answerBattleQuestionAction,
  answerBattleQuestionActionFailure,
  answerBattleQuestionActionSuccess,

} from "./answerBattleQuestion.action";
import {Router} from "@angular/router";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class AnswerBattleQuestionEffect {

  private _service = inject(AnswerBattleQuestionService);
  private action$ = inject(Actions);
  private router = inject(Router);
  _onAnswerBattleQuestion = createEffect((): any =>
    this.action$.pipe(
      ofType(answerBattleQuestionAction),
      switchMap((action) => {
        return this._service.answerBattleQuestion(action.requestData).pipe(
          switchMap(data => {
            if(data.data){
              if(data.data.is_finished){
                if(data.data.next_step_id){
                  this.router.navigateByUrl('/', {skipLocationChange: true})
                    //@ts-ignore
                    .then(()=>this.router.navigate(['/'+RoutesName.battleGame+'/'+data.data.next_step_id.toString()]));

                }
                else{
                  this.router.navigateByUrl('/', {skipLocationChange: true})
                    //@ts-ignore
                    .then(()=>this.router.navigate(['/'+RoutesName.battleDetail+'/'+data.data.battle_promo_code.toString()]));
                }
              }
            }
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
