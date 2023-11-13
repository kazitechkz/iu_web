import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";
import {AttemptSetting} from "../../../models/attemptSetting.model";

export const createAttemptSettingsAdapter = createEntityAdapter<AttemptSetting>();

export const createAttemptSettingsState: EntityState<AttemptSetting> = createAttemptSettingsAdapter.getInitialState();
