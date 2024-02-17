import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {PayModel} from "../../paybox/pay_create/pay.model";

export const participateTournamentAdapter = createEntityAdapter<boolean>();
export const participateTournamentState: EntityState<boolean> = participateTournamentAdapter.getInitialState();
export const payTournamentAdapter = createEntityAdapter<PayModel>();
export const payTournamentState: EntityState<PayModel> = payTournamentAdapter.getInitialState();
