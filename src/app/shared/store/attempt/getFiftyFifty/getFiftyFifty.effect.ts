import {inject, Injectable} from "@angular/core";
import {AnsweredResultService} from "../answeredResult/answerResult.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {
  onAnsweredResultAction,
  onAnsweredResultActionFailure,
  onAnsweredResultActionSuccess
} from "../answeredResult/answerResult.action";
import {catchError, of, switchMap} from "rxjs";
import {GetFiftyFiftyService} from "./getFiftyFifty.service";
import {onGetFiftyFiftyAction,onGetFiftyFiftyActionSuccess, onGetFiftyFiftyActionFailure} from "./getFiftyFifty.action";

@Injectable()
export class GetFiftyFiftyEffect {

  private _service = inject(GetFiftyFiftyService);
  private action$ = inject(Actions);
  private _toastr = inject(ToastrService);
  private _route = inject(Router);

  _onGetFiftyFifty = createEffect((): any =>
    this.action$.pipe(
      ofType(onGetFiftyFiftyAction),
      switchMap((action) => {
        return this._service.getFiftyFifty(action.requestData).pipe(
          switchMap(data => {
              return of(
                onGetFiftyFiftyActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(onGetFiftyFiftyActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
