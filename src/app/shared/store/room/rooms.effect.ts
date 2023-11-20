import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RoomsService} from "./rooms.service";
import {catchError, of, switchMap} from "rxjs";
import {
    deleteRoomsAction, deleteRoomsActionFailure, deleteRoomsActionSuccess,
    joinRoomsAction, joinRoomsActionFailure,
    joinRoomsActionSuccess,
    RoomsAction,
    RoomsActionFailure,
    RoomsActionSuccess
} from "./rooms.action";

@Injectable()
export class RoomsEffect {

    private _service = inject(RoomsService);
    private action$ = inject(Actions);

    _onRooms = createEffect((): any =>
        this.action$.pipe(
            ofType(RoomsAction),
            switchMap((action) => {
                return this._service.getRooms().pipe(
                    switchMap(data => {
                            return of(
                                RoomsActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(RoomsActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onJoinRooms = createEffect((): any =>
        this.action$.pipe(
            ofType(joinRoomsAction),
            switchMap((action) => {
                return this._service.joinRooms(action.req).pipe(
                    switchMap(data => {
                            return of(
                                joinRoomsActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(joinRoomsActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );

    _onDeleteRooms = createEffect((): any =>
        this.action$.pipe(
            ofType(deleteRoomsAction),
            switchMap((action) => {
                return this._service.deleteRooms(action.id).pipe(
                    switchMap(data => {
                            return of(
                                deleteRoomsActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(deleteRoomsActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
