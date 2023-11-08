import {createReducer, on} from "@ngrx/store";
import {
  classroomsGroupState,
  createClassroomsGroupState, deleteClassroomsGroupState,
  getClassroomsGroupByIDState,
  updateClassroomsGroupState
} from "./classrooms.state";
import {
  classroomsGroupAction,
  classroomsGroupActionFailure,
  classroomsGroupActionSuccess,
  createClassroomsGroupAction,
  createClassroomsGroupActionFailure,
  createClassroomsGroupActionSuccess,
  deleteClassroomsGroupAction,
  deleteClassroomsGroupActionFailure,
  deleteClassroomsGroupActionSuccess,
  getClassroomsGroupByIDAction,
  getClassroomsGroupByIDActionSuccess,
  updateClassroomsGroupAction,
  updateClassroomsGroupActionFailure,
  updateClassroomsGroupActionSuccess
} from "./classrooms.action";


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

const _getClassroomsGroupByIDReducer = createReducer(
    getClassroomsGroupByIDState,
    on(getClassroomsGroupByIDAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(getClassroomsGroupByIDActionSuccess, (state, action) => {
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

export function getClassroomsGroupByIDReducer(state: any, action: any) {
    return _getClassroomsGroupByIDReducer(state, action);
}

const _createClassroomsGroupReducer = createReducer(
    createClassroomsGroupState,
    on(createClassroomsGroupAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(createClassroomsGroupActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(createClassroomsGroupActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function createClassroomsGroupReducer(state: any, action: any) {
    return _createClassroomsGroupReducer(state, action);
}

const _updateClassroomsGroupReducer = createReducer(
    updateClassroomsGroupState,
    on(updateClassroomsGroupAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(updateClassroomsGroupActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(updateClassroomsGroupActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function updateClassroomsGroupReducer(state: any, action: any) {
    return _updateClassroomsGroupReducer(state, action);
}

const _deleteClassroomsGroupReducer = createReducer(
    deleteClassroomsGroupState,
    on(deleteClassroomsGroupAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(deleteClassroomsGroupActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(deleteClassroomsGroupActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function deleteClassroomsGroupReducer(state: any, action: any) {
    return _deleteClassroomsGroupReducer(state, action);
}
