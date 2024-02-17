import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PayModel} from "../../paybox/pay_create/pay.model";

const participate_tournament_state = createFeatureSelector<ResponseData<boolean>>('participateTournament');
export const participateTournamentSelector = createSelector(participate_tournament_state, (state) => {
  return state;
})
const pay_tournament_state = createFeatureSelector<ResponseData<PayModel>>('payTournament');
export const payTournamentSelector = createSelector(pay_tournament_state, (state) => {
  return state;
})
