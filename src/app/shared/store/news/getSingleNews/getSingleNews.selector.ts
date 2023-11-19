import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {News} from "../../../models/news.model";

const get_single_news_state = createFeatureSelector<ResponseData<News>>('getSingleNews');

export const getSingleNewsSelector = createSelector(get_single_news_state, (state) => {
  return state;
})
