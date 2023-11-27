import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CloseTechSupportTicketService} from "./closeTechSupportTicket.service";
import {
    closeTechSupportTicketAction, closeTechSupportTicketActionFailure, closeTechSupportTicketActionSuccess
} from "./closeTechSupportTicket.action";

@Injectable()
export class CloseTechSupportTicketEffect {

  private _service = inject(CloseTechSupportTicketService);
  private action$ = inject(Actions);

  _onCloseTechSupportTicket = createEffect((): any =>
    this.action$.pipe(
      ofType(closeTechSupportTicketAction),
      switchMap((action) => {
        return this._service.closeTechSupportTicket(action.requestData).pipe(
          switchMap(data => {
              return of(
                  closeTechSupportTicketActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(closeTechSupportTicketActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
