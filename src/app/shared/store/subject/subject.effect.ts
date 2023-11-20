import {inject, Injectable} from "@angular/core";
import {AccountService} from "../user/account/account.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToastrService} from "ngx-toastr";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";
import {accountAction, accountActionFailure, accountActionSuccess} from "../user/account/account.action";
import {catchError, of, switchMap} from "rxjs";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";
import {Me} from "../../models/user.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {SubjectService} from "./subject.service";
import {
  subjectGetAction,
  subjectGetActionFailure,
  subjectGetActionSuccess,
  subjectsWithoutRequiredGetAction, subjectsWithoutRequiredGetActionFailure, subjectsWithoutRequiredGetActionSuccess
} from "./subject.action";

@Injectable()
export class SubjectEffect {

  private _service = inject(SubjectService);
  private action$ = inject(Actions);

  _onSubjects = createEffect((): any =>
    this.action$.pipe(
      ofType(subjectGetAction),
      switchMap((action) => {
        return this._service.getSubjects().pipe(
          switchMap(data => {
              return of(
                subjectGetActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(subjectGetActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
  _onSubjectsWithoutRequired = createEffect((): any =>
    this.action$.pipe(
      ofType(subjectsWithoutRequiredGetAction),
      switchMap((action) => {
        return this._service.getSubjectsWithoutRequired().pipe(
          switchMap(data => {
              return of(
                subjectsWithoutRequiredGetActionSuccess({responseData: data}),
              )
            }
          ),
          catchError((_error) =>
            of(subjectsWithoutRequiredGetActionFailure({errors: _error}))
          )
        )
      }),
    ),
  );
}
