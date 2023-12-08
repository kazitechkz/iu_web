import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const getMyAttemptUNTSettingsAdapter = createEntityAdapter<Pagination<AttemptSettingUNT[]>>();
export const getMyAttemptUNTSettingsState: EntityState<Pagination<AttemptSettingUNT[]>> = getMyAttemptUNTSettingsAdapter.getInitialState();
