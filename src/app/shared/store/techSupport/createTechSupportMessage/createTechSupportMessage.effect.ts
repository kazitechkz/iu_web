import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {CreateTechSupportMessageService} from "./createTechSupportMessage.service";
import {
    createTechSupportMessageAction, createTechSupportMessageActionFailure, createTechSupportMessageActionSuccess
} from "./createTechSupportMessage.action";
import {Router} from "@angular/router";
import {RoutesName} from "../../../../core/constants/routes.constants";

@Injectable()
export class CreateTechSupportMessageEffect {

  private _service = inject(CreateTechSupportMessageService);
  private action$ = inject(Actions);
  private router = inject(Router);

  _onCreateTechSupportMessage = createEffect((): any =>
    this.action$.pipe(
      ofType(createTechSupportMessageAction),
      switchMap((action) => {
        return this._service.createTechSupportMessage(action.requestData).pipe(
          switchMap(data => {
              return of(
                  createTechSupportMessageActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(createTechSupportMessageActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
