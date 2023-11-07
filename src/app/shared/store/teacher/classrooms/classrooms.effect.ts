import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ClassroomsService} from "./classrooms.service";
import {catchError, of, switchMap} from "rxjs";
import {classroomsGroupAction, classroomsGroupActionFailure, classroomsGroupActionSuccess} from "./classrooms.action";


@Injectable()
export class ClassroomsGroupEffect {

    private _service = inject(ClassroomsService);
    private action$ = inject(Actions);

    _onClassroomsGroup = createEffect((): any =>
        this.action$.pipe(
            ofType(classroomsGroupAction),
            switchMap((action) => {
                return this._service.getClassroomsGroup().pipe(
                    switchMap(data => {
                            return of(
                                classroomsGroupActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(classroomsGroupActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
