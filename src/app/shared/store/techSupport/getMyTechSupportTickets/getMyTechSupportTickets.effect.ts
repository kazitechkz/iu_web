import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetMyTechSupportTicketsService} from "./getMyTechSupportTickets.service";
import {
    getMyTechSupportTicketsAction, getMyTechSupportTicketsActionFailure,
    getMyTechSupportTicketsActionSuccess,
} from "./getMyTechSupportTickets.action";

@Injectable()
export class GetMyTechSupportTicketsEffect {

  private _service = inject(GetMyTechSupportTicketsService);
  private action$ = inject(Actions);

  _onGetMyTechSupportTickets = createEffect((): any =>
    this.action$.pipe(
      ofType(getMyTechSupportTicketsAction),
      switchMap((action) => {
        return this._service.getMyTechSupportTickets(action.requestData).pipe(
          switchMap(data => {
              return of(
                  getMyTechSupportTicketsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(getMyTechSupportTicketsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
