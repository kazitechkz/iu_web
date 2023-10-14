import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const participate_tournament_state = createFeatureSelector<ResponseData<boolean>>('participateTournament');

export const participateTournamentSelector = createSelector(participate_tournament_state, (state) => {
  return state;
})
