import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {UntStatModel} from "../../../models/untStat.model";

export const getUntStatAdapter = createEntityAdapter<UntStatModel>();

export const getUntStatState: EntityState<UntStatModel> = getUntStatAdapter.getInitialState();
