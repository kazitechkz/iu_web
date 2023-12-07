import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Question} from "../../../models/question.model";

export const getMySavedQuestionByIdAdapter = createEntityAdapter<Question>();

export const getMySavedQuestionByIdState: EntityState<Question> = getMySavedQuestionByIdAdapter.getInitialState();
