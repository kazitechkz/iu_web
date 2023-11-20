import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const createAttemptSettingsUNTAdapter = createEntityAdapter<AttemptSettingUNT>();

export const createAttemptSettingsUNTState: EntityState<AttemptSettingUNT> = createAttemptSettingsUNTAdapter.getInitialState();
