import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {News} from "../../../models/news.model";
import {Pagination} from "../../pagination";

const all_news_state = createFeatureSelector<ResponseData<Pagination<News[]>>>('allNews');

export const allNewsSelector = createSelector(all_news_state, (state) => {
  return state;
})
