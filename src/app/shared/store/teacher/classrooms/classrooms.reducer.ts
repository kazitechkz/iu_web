import {createReducer, on} from "@ngrx/store";
import {classroomsGroupState} from "./classrooms.state";
import {classroomsGroupAction, classroomsGroupActionFailure, classroomsGroupActionSuccess} from "./classrooms.action";


const _classroomsGroupReducer = createReducer(
    classroomsGroupState,
    on(classroomsGroupAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(classroomsGroupActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(classroomsGroupActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function classroomsGroupReducer(state: any, action: any) {
    return _classroomsGroupReducer(state, action);
}
