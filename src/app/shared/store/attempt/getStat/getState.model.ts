import {AttemptQuestion} from "../../../models/attemptQuestion.model";
import {Attempt} from "../../../models/attempt.model";

export interface GetStateModel{
  attempt_questions:AttemptQuestion[],
  attempt:Attempt
}
