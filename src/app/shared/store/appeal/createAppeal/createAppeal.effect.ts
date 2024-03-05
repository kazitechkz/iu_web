import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, of, switchMap} from "rxjs";
import {
    onCreateAppealAction, onCreateAppealActionFailure, onCreateAppealActionSuccess,
} from "./createAppeal.action";
import {CreateAppealService} from "./createAppeal.service";
import {TwNotification} from "ng-tw";
import Swal from "sweetalert2";

@Injectable()
export class CreateAppealEffect {

  private _service = inject(CreateAppealService);
  private action$ = inject(Actions);
  private _notification = inject(TwNotification)
  private _route = inject(Router);

  _createAppeal = createEffect((): any =>
    this.action$.pipe(
      ofType(onCreateAppealAction),
      switchMap((action) => {
        return this._service.createAppeal(action.requestData).pipe(
          switchMap(data => {
              this._notification.show({ type: 'success', title: 'Ураа!', text: data.message??""})
              Swal.fire({
                title: "Отличная работа!",
                text: "Мы благодарны за ваше обращение и желание сделать нас лучше, в скором времени Вам начислится бонус",
                icon: "success"
              });
              return of(
                onCreateAppealActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(onCreateAppealActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
