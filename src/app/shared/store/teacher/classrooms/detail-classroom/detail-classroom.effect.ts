import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DetailClassroomService} from "./detail-classroom.service";
import {catchError, of, switchMap} from "rxjs";
import {
  detailClassroomAction, detailClassroomActionFailure, detailClassroomActionSuccess

} from "./detail-classroom.action";


@Injectable()
export class DetailClassroomEffect {

    private _service = inject(DetailClassroomService);
    private action$ = inject(Actions);

    _onDetailClassroom = createEffect((): any =>
        this.action$.pipe(
            ofType(detailClassroomAction),
            switchMap((action) => {
                return this._service.getDetailClassroom(action.id).pipe(
                    switchMap(data => {
                            return of(
                                detailClassroomActionSuccess({responseData: data}),
                            )
                        }
                    ),
                    catchError((_error) =>
                        of(detailClassroomActionFailure({errors: _error}))
                    )
                )
            }),
        ),
    );
}
