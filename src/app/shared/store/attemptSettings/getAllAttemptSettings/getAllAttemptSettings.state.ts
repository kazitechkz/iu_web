import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";

export const getAllAttemptSettingsAdapter = createEntityAdapter<Pagination<AttemptSetting[]>>();

export const getAllAttemptSettingsState: EntityState<Pagination<AttemptSetting[]>> = getAllAttemptSettingsAdapter.getInitialState();
