import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Information} from "../../../models/information.model";

export const getInformationAdapter = createEntityAdapter<Information>();

export const getInformationState: EntityState<Information> = getInformationAdapter.getInitialState();
