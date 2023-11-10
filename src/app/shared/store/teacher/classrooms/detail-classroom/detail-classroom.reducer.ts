import {createReducer, on} from "@ngrx/store";
import {
  detailClassroomState

} from "./detail-classroom.state";
import {
  detailClassroomAction, detailClassroomActionFailure, detailClassroomActionSuccess

} from "./detail-classroom.action";


const _detailClassroomReducer = createReducer(
    detailClassroomState,
    on(detailClassroomAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(detailClassroomActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(detailClassroomActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function detailClassroomReducer(state: any, action: any) {
    return _detailClassroomReducer(state, action);
}
