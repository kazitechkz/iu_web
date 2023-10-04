import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AnsweredResult} from "../answeredResult/answeredResult";

export const saveQuestionAdapter = createEntityAdapter<boolean>();

export const saveQuestionState: EntityState<boolean> = saveQuestionAdapter.getInitialState();
