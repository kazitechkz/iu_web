import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetForumModel} from "./getForum.model";
import {News} from "../../../models/news.model";

const get_important_news_state = createFeatureSelector<ResponseData<News>>('getImportantNews');

export const getImportantNewsSelector = createSelector(get_important_news_state, (state) => {
  return state;
})
