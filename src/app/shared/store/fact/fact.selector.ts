import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {FactModel} from "../../models/fact.model";

const get_fact_state = createFeatureSelector<ResponseData<FactModel>>('facts');

export const getFactStateSelector = createSelector(get_fact_state, (state) => {
    return state;
})
