import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetTournamentDetailModel} from "./getTournamentDetail.model";

export const getTournamentDetailAdapter = createEntityAdapter<GetTournamentDetailModel>();

export const getTournamentDetailState: EntityState<GetTournamentDetailModel> = getTournamentDetailAdapter.getInitialState();
