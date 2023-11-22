import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const getAllAttemptSettingsUNTAdapter = createEntityAdapter<Pagination<AttemptSettingUNT[]>>();
export const getAllAttemptSettingsUNTState: EntityState<Pagination<AttemptSettingUNT[]>> = getAllAttemptSettingsUNTAdapter.getInitialState();
