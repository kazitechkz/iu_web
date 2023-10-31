import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";

export const getSubTournamentParticipantsAdapter = createEntityAdapter<Pagination<SubTournamentParticipant[]>>();

export const getSubTournamentParticipantsState: EntityState<Pagination<SubTournamentParticipant[]>> = getSubTournamentParticipantsAdapter.getInitialState();
