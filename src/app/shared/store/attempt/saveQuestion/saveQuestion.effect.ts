import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, of, switchMap} from "rxjs";
import {onSaveQuestionAction, onSaveQuestionActionFailure, onSaveQuestionActionSuccess} from "./saveQuestion.action";
import {SaveQuestionService} from "./saveQuestion.service";

@Injectable()
export class SaveQuestionEffect {

  private _service = inject(SaveQuestionService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _saveQuestion = createEffect((): any =>
    this.action$.pipe(
      ofType(onSaveQuestionAction),
      switchMap((action) => {
        return this._service.saveQuestion(action.requestData).pipe(
          switchMap(data => {
              this._toastr.success(data.message??"");
              return of(
                onSaveQuestionActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(onSaveQuestionActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
