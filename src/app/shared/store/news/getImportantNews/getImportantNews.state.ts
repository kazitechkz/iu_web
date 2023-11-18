import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {News} from "../../../models/news.model";

export const getImportantNewsAdapter = createEntityAdapter<News>();

export const getImportantNewsState: EntityState<News> = getImportantNewsAdapter.getInitialState();
