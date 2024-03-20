import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Tournament} from "../../../models/tournament.model";

export const getListOfTournamentsAdapter = createEntityAdapter<Pagination<Tournament[]>>();

export const getListOfTournamentsState: EntityState<Pagination<Tournament[]>> = getListOfTournamentsAdapter.getInitialState();
