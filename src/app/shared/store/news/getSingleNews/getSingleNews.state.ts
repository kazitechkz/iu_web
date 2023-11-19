import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {News} from "../../../models/news.model";

export const getSingleNewsAdapter = createEntityAdapter<News>();

export const getSingleNewsState: EntityState<News> = getSingleNewsAdapter.getInitialState();
