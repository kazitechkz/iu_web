import {AttemptQuestion} from "../../../models/attemptQuestion.model";
import {Attempt} from "../../../models/attempt.model";
import {AttemptModel} from "../../../models/attempt";

export interface GetStateModel{
  attempt_questions:AttemptQuestion[],
  attempt:Attempt,
  result:AttemptModel,
}
