import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {SubTournamentWinner} from "../../../models/subTournamentWinner.model";

export const getSubTournamentWinnersAdapter = createEntityAdapter<SubTournamentWinner[]>();

export const getSubTournamentWinnersState: EntityState<SubTournamentWinner[]> = getSubTournamentWinnersAdapter.getInitialState();
