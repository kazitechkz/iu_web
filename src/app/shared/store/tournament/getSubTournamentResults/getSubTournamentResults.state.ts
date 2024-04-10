import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";
import {Pagination} from "../../pagination";
import {SubTournamentResult} from "../../../models/subTournamentResult.model";

export const getSubTournamentResultsAdapter = createEntityAdapter<Pagination<SubTournamentResult[]>>();

export const getSubTournamentResultsState: EntityState<Pagination<SubTournamentResult[]>> = getSubTournamentResultsAdapter.getInitialState();
