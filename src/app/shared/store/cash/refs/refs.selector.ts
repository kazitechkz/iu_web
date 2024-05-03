import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {RefsModel} from "./refs.model";

const get_ref_state = createFeatureSelector<ResponseData<RefsModel>>('refs');
export const refsSelector = createSelector(get_ref_state, (state) => {
  return state;
})
