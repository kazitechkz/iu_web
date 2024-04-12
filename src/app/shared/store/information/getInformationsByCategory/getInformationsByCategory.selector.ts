import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

const get_informations_by_category_state = createFeatureSelector<ResponseData<Pagination<Information[]>>>('getInformationsByCategory');

export const getInformationsByCategorySelector = createSelector(get_informations_by_category_state, (state) => {
  return state;
})
