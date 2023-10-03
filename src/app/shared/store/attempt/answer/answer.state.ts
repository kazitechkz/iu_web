import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";
import {AnswerResult} from "../../../models/answerResult.model";

export const createAnswerAdapter = createEntityAdapter<AnswerResult>();

export const answerState: EntityState<AnswerResult> = createAnswerAdapter.getInitialState();
