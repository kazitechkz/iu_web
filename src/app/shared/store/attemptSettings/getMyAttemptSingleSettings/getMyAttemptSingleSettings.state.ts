import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {AttemptSettingStudentModel} from "../../../models/attemptSettingStudent.model";

export const getMyAttemptSingleSettingsAdapter = createEntityAdapter<Pagination<AttemptSettingStudentModel[]>>();
export const getMyAttemptSingleSettingsState: EntityState<Pagination<AttemptSettingStudentModel[]>> = getMyAttemptSingleSettingsAdapter.getInitialState();
