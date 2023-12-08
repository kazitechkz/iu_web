import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CreateTechSupportTicketService} from "./createTechSupportTicket.service";
import {
    createTechSupportTicketAction, createTechSupportTicketActionFailure, createTechSupportTicketActionSuccess
} from "./createTechSupportTicket.action";
import {RoutesName} from "../../../../core/constants/routes.constants";
import {Router} from "@angular/router";

@Injectable()
export class CreateTechSupportTicketEffect {

  private _service = inject(CreateTechSupportTicketService);
  private action$ = inject(Actions);
  private router = inject(Router);

  _onCreateTechSupportTicket = createEffect((): any =>
    this.action$.pipe(
      ofType(createTechSupportTicketAction),
      switchMap((action) => {
        return this._service.createTechSupportTicket(action.requestData).pipe(
          switchMap(data => {
            this.router.navigate(["/" + RoutesName.ticketDetail + "/" + data.data?.id])
            return of(
                  createTechSupportTicketActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createTechSupportTicketActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
