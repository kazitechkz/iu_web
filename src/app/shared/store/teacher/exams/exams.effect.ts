import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ExamsService} from "./exams.service";
import {catchError, of, switchMap} from "rxjs";
import {
  deleteExamByIdAction,
  deleteExamByIdFailure,
  deleteExamByIdSuccess,
  deleteUNTExamByIdAction, deleteUNTExamByIdFailure, deleteUNTExamByIdSuccess
} from "./exams.action";


@Injectable()
export class ExamsEffect {

    private _service = inject(ExamsService);
    private action$ = inject(Actions);

    _onDeleteExamById = createEffect((): any =>
        this.action$.pipe(
            ofType(deleteExamByIdAction),
            switchMap((action) => {
                return this._service.deleteExamByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                deleteExamByIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(deleteExamByIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onDeleteUNTExamById = createEffect((): any =>
        this.action$.pipe(
            ofType(deleteUNTExamByIdAction),
            switchMap((action) => {
                return this._service.deleteUNTExamByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                deleteUNTExamByIdSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(deleteUNTExamByIdFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
