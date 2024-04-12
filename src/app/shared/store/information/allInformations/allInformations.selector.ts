import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

const all_informations_state = createFeatureSelector<ResponseData<Pagination<Information[]>>>('allInformations');

export const allInformationsSelector = createSelector(all_informations_state, (state) => {
  return state;
})
