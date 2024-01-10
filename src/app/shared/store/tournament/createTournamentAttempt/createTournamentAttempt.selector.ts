import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";

const create_tournament_attempt_selector = createFeatureSelector<ResponseData<number>>('createTournamentAttempt');

export const createTournamentAttemptSelector = createSelector(create_tournament_attempt_selector, (state) => {
  return state;
})
