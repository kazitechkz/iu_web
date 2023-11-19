import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {News} from "../../../models/news.model";

export const allNewsAdapter = createEntityAdapter<Pagination<News[]>>();

export const allNewsState: EntityState<Pagination<News[]>> = allNewsAdapter.getInitialState();
