import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {GetAllAnnouncementsService} from "./getAllAnnouncements.service";
import {
  GetAllAnnouncementsAction,
  GetAllAnnouncementsActionFailure,
  GetAllAnnouncementsActionSuccess
} from "./getAllAnnouncements.action";

@Injectable()
export class GetAllAnnouncementsEffect {

  private _service = inject(GetAllAnnouncementsService);
  private action$ = inject(Actions);

  _onSubCategories = createEffect((): any =>
    this.action$.pipe(
      ofType(GetAllAnnouncementsAction),
      switchMap((action) => {
        return this._service.getAllAnnouncements().pipe(
          switchMap(data => {
              return of(
                GetAllAnnouncementsActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(GetAllAnnouncementsActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
