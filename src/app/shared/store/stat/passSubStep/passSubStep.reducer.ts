import {createReducer, on} from "@ngrx/store";
import {passSubStepState} from "./passSubStep.state";
import {
  PassSubStepAction,
  PassSubStepClearAction,
  PassSubStepFailureAction,
  PassSubStepSuccessAction
} from "./passSubStep.action";


const _passSubStepReducer = createReducer(
  passSubStepState,
  on(PassSubStepAction, (state) => {
    return {
      ...state
    }
  }),
  on(PassSubStepClearAction, (state) => {
    return {
      ...state,
      data: null
    }
  }),
  on(PassSubStepSuccessAction, (state, action) => {
    return {
      ...state,
      status: true,
      data: action.responseData.data
    }
  }),
  on(PassSubStepFailureAction, (state, action) => {
    return {
      ...state,
      status: false,
      errors: action.errors
    }
  })
);

export function passSubStepReducer(state: any, action: any) {
  return _passSubStepReducer(state, action);
}
