import {createReducer, on} from "@ngrx/store";
import {
    deleteRoomsAction, deleteRoomsActionFailure, deleteRoomsActionSuccess,
    joinRoomsAction, joinRoomsActionFailure,
    joinRoomsActionSuccess,
    RoomsAction,
    RoomsActionFailure,
    RoomsActionSuccess
} from "./rooms.action";
import {deleteRoomsState, joinRoomsState, RoomsState} from "./rooms.state";

const _roomsReducer = createReducer(
    RoomsState,
    on(RoomsAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(RoomsActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(RoomsActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function roomsReducer(state: any, action: any) {
    return _roomsReducer(state, action);
}

const _joinRoomsReducer = createReducer(
    joinRoomsState,
    on(joinRoomsAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(joinRoomsActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(joinRoomsActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function joinRoomsReducer(state: any, action: any) {
    return _joinRoomsReducer(state, action);
}

const _deleteRoomsReducer = createReducer(
    deleteRoomsState,
    on(deleteRoomsAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(deleteRoomsActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(deleteRoomsActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function deleteRoomsReducer(state: any, action: any) {
    return _deleteRoomsReducer(state, action);
}
