import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Question} from "../../../models/question.model";

export const getMySavedQuestionsAdapter = createEntityAdapter<Pagination<Question[]>>();

export const getMySavedQuestionsState: EntityState<Pagination<Question[]>> = getMySavedQuestionsAdapter.getInitialState();
