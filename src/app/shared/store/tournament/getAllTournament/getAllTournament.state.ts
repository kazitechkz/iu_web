import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AppealType} from "../../../models/appealType.model";
import {GetAllTournamentModel} from "./getAllTournament.model";

export const getAllTournamentAdapter = createEntityAdapter<GetAllTournamentModel>();

export const getAllTournamentState: EntityState<GetAllTournamentModel> = getAllTournamentAdapter.getInitialState();
