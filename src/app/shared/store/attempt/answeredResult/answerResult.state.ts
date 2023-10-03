import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";
import {AnswerResult} from "../../../models/answerResult.model";
import {AnsweredResult} from "./answeredResult";

export const createAnsweredAdapter = createEntityAdapter<AnsweredResult>();

export const answeredResultState: EntityState<AnsweredResult> = createAnsweredAdapter.getInitialState();
