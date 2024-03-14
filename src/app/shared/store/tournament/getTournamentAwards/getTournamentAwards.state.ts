import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {TournamentAward} from "../../../models/tournamentAward.model";

export const getTournamentAwardsAdapter = createEntityAdapter<Pagination<TournamentAward[]>>();

export const getTournamentAwardsState: EntityState<Pagination<TournamentAward[]>> = getTournamentAwardsAdapter.getInitialState();
