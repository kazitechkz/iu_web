import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {FinishBattleResultService} from "./finishBattleResult.service";
import {
  finishBattleResultAction,finishBattleResultActionSuccess ,finishBattleResultActionFailure ,
} from "./finishBattleResult.action";
import {Router} from "@angular/router";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class FinishBattleResultEffect {

  private _service = inject(FinishBattleResultService);
  private action$ = inject(Actions);
    private router = inject(Router);
  _finishBattleResult = createEffect((): any =>
    this.action$.pipe(
      ofType(finishBattleResultAction),
      switchMap((action) => {
        return this._service.finishBattleResult(action.requestData).pipe(
          switchMap(data => {
              if(data.data){
                  if(data.data.next_battle_step_id){
                      this.router.navigate([RoutesName.battleGame + "/" + data.data.next_battle_step_id.toString()])
                  }
                  else{
                      this.router.navigate([RoutesName.battleDetail + "/" + data.data.battle_promo_code.toString()])
                  }
              }
              return of(
                  finishBattleResultActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(finishBattleResultActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
