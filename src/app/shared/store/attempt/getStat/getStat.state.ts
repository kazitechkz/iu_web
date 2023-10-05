import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";
import {GetStateModel} from "./getState.model";

export const getStatAdapter = createEntityAdapter<GetStateModel>();

export const getStatState: EntityState<GetStateModel> = getStatAdapter.getInitialState();
