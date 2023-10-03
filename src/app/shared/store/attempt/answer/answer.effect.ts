import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, exhaustMap, of, switchMap} from "rxjs";
import {AnswerService} from "./answer.service";
import {createAnswerAction, createAnswerActionFailure, createAnswerActionSuccess} from "./answer.action";

@Injectable()
export class CreateAnswerEffect {

  private _service = inject(AnswerService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _onAnswer = createEffect((): any =>
    this.action$.pipe(
      ofType(createAnswerAction),
      switchMap((action) => {
        return this._service.answer(action.requestData).pipe(
          switchMap(data => {
              return of(
                createAnswerActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createAnswerActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
