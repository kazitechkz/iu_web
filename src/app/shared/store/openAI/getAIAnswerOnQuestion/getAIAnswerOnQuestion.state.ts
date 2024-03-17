import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const getAIAnswerOnQuestionAdapter = createEntityAdapter<string>();

export const getAIAnswerOnQuestionState: EntityState<string> = getAIAnswerOnQuestionAdapter.getInitialState();
