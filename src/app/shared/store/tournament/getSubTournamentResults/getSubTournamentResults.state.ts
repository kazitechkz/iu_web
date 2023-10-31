import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";

export const getSubTournamentResultsAdapter = createEntityAdapter<GetSubTournamentResultsModel>();

export const getSubTournamentResultsState: EntityState<GetSubTournamentResultsModel> = getSubTournamentResultsAdapter.getInitialState();
