import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetTechSupportTicketDetailService} from "./getTechSupportTicketDetail.service";
import {
    getTechSupportTicketDetailAction, getTechSupportTicketDetailActionFailure, getTechSupportTicketDetailActionSuccess
} from "./getTechSupportTicketDetail.action";

@Injectable()
export class GetTechSupportTicketDetailEffect {

  private _service = inject(GetTechSupportTicketDetailService);
  private action$ = inject(Actions);

  _onGetTechSupportTicketDetail = createEffect((): any =>
    this.action$.pipe(
      ofType(getTechSupportTicketDetailAction),
      switchMap((action) => {
        return this._service.getTechSupportTicketDetail(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getTechSupportTicketDetailActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getTechSupportTicketDetailActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
