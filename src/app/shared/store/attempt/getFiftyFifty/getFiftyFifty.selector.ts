import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AnsweredResult} from "../answeredResult/answeredResult";
import {GetFiftyFiftyModel} from "./getFiftyFifty.model";

const get_fifty_fifty_selector = createFeatureSelector<ResponseData<GetFiftyFiftyModel>>('getFiftyFifty');

export const getFiftyFiftySelector = createSelector(get_fifty_fifty_selector, (state) => {
  return state;
})
