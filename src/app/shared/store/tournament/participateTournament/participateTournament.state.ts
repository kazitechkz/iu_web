import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const participateTournamentAdapter = createEntityAdapter<boolean>();

export const participateTournamentState: EntityState<boolean> = participateTournamentAdapter.getInitialState();
