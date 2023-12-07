import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MyStudentsService} from "./my-students.service";
import {catchError, of, switchMap} from "rxjs";
import {
  MyStudentsAction, MyStudentsFailure, MyStudentsSuccess,
} from "./my-students.action";


@Injectable()
export class MyStudentsEffect {

    private _service = inject(MyStudentsService);
    private action$ = inject(Actions);

    _onGetMyStudents = createEffect((): any =>
        this.action$.pipe(
            ofType(MyStudentsAction),
            switchMap((action) => {
                return this._service.getMyStudents().pipe(
                    switchMap(data => {
                            return of(
                                MyStudentsSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(MyStudentsFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
