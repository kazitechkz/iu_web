import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {AnsweredResultService} from "./answerResult.service";
import {
  onAnsweredResultAction,
  onAnsweredResultActionFailure,
  onAnsweredResultActionSuccess
} from "./answerResult.action";

@Injectable()
export class GetAnsweredResultEffect {

  private _service = inject(AnsweredResultService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _OnAnsweredResult = createEffect((): any =>
    this.action$.pipe(
      ofType(onAnsweredResultAction),
      switchMap((action) => {
        return this._service.getResult(action.requestData).pipe(
          switchMap(data => {
              return of(
                onAnsweredResultActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(onAnsweredResultActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
