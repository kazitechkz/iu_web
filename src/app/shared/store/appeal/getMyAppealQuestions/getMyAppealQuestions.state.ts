import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Appeal} from "../../../models/appeal.model";

export const getMyAppealQuestionsAdapter = createEntityAdapter<Pagination<Appeal[]>>();

export const getMyAppealQuestionsState: EntityState<Pagination<Appeal[]>> = getMyAppealQuestionsAdapter.getInitialState();
