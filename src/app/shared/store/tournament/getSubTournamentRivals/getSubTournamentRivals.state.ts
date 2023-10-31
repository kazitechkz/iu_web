import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {SubTournamentRival} from "../../../models/subTournamentRival.model";

export const getSubTournamentRivalsAdapter = createEntityAdapter<SubTournamentRival[]>();

export const getSubTournamentRivalsState: EntityState<SubTournamentRival[]> = getSubTournamentRivalsAdapter.getInitialState();
