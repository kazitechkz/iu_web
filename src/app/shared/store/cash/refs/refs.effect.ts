import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {refsAction, refsActionSuccess, refsActionFailure,} from "./refs.action";
import {RefsService} from "./refs.service";

@Injectable()
export class RefsEffect {

  private _service = inject(RefsService);
  private action$ = inject(Actions);

  _onRefsEffect = createEffect((): any =>
    this.action$.pipe(
      ofType(refsAction),
      switchMap((action) => {
        return this._service.getMyRefs().pipe(
          switchMap(data => {
              return of(
                refsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(refsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
