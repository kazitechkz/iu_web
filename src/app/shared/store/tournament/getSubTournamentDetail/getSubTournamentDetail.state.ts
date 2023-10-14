import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetSubTournamentDetailModel} from "./getSubTournamentDetail.model";

export const getSubTournamentDetailAdapter = createEntityAdapter<GetSubTournamentDetailModel>();

export const getSubTournamentDetailState: EntityState<GetSubTournamentDetailModel> = getSubTournamentDetailAdapter.getInitialState();
