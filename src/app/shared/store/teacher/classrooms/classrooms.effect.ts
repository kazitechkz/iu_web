import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ClassroomsService} from "./classrooms.service";
import {catchError, of, switchMap} from "rxjs";
import {
  classroomsGroupAction,
  classroomsGroupActionFailure,
  classroomsGroupActionSuccess,
  createClassroomsGroupAction,
  createClassroomsGroupActionFailure,
  createClassroomsGroupActionSuccess,
  deleteClassroomByIDAction,
  deleteClassroomByIDActionFailure,
  deleteClassroomByIDActionSuccess,
  deleteClassroomsGroupAction,
  deleteClassroomsGroupActionFailure,
  deleteClassroomsGroupActionSuccess,
  getClassroomsGroupByIDAction,
  getClassroomsGroupByIDActionFailure,
  getClassroomsGroupByIDActionSuccess,
  updateClassroomsGroupAction,
  updateClassroomsGroupActionFailure,
  updateClassroomsGroupActionSuccess
} from "./classrooms.action";


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

    _onClassroomsGroupByID = createEffect((): any =>
        this.action$.pipe(
            ofType(getClassroomsGroupByIDAction),
            switchMap((action) => {
                return this._service.getClassroomsGroupByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                getClassroomsGroupByIDActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(getClassroomsGroupByIDActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onCreateClassroomsGroup = createEffect((): any =>
        this.action$.pipe(
            ofType(createClassroomsGroupAction),
            switchMap((action) => {
                return this._service.createClassroomsGroup(action.request).pipe(
                    switchMap(data => {
                            return of(
                                createClassroomsGroupActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(createClassroomsGroupActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onUpdateClassroomsGroup = createEffect((): any =>
        this.action$.pipe(
            ofType(updateClassroomsGroupAction),
            switchMap((action) => {
                return this._service.updateClassroomsGroup(action.request, action.id).pipe(
                    switchMap(data => {
                            return of(
                                updateClassroomsGroupActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(updateClassroomsGroupActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onDeleteClassroomsGroup = createEffect((): any =>
        this.action$.pipe(
            ofType(deleteClassroomsGroupAction),
            switchMap((action) => {
                return this._service.deleteClassroomsGroup(action.id).pipe(
                    switchMap(data => {
                            return of(
                                deleteClassroomsGroupActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(deleteClassroomsGroupActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onDeleteClassroomByID = createEffect((): any =>
        this.action$.pipe(
            ofType(deleteClassroomByIDAction),
            switchMap((action) => {
                return this._service.deleteClassroomByID(action.id).pipe(
                    switchMap(data => {
                            return of(
                                deleteClassroomByIDActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(deleteClassroomByIDActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
