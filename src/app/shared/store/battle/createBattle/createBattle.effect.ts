import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CreateBattleService} from "./createBattle.service";
import {
  createBattleAction,
  createBattleActionFailure,
  createBattleActionSuccess,
} from "./createBattle.action";
import {Router} from "@angular/router";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class CreateBattleEffect {

  private _service = inject(CreateBattleService);
  private action$ = inject(Actions);
  private router = inject(Router);

  _onCreateBattle = createEffect((): any =>
    this.action$.pipe(
      ofType(createBattleAction),
      switchMap((action) => {
        return this._service.createBattle(action.requestData).pipe(
          switchMap(data => {
            this.router.navigate(['/'+RoutesName.battleDetail+'/'+data.data?.promo_code])
              return of(
                createBattleActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createBattleActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
