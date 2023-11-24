import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AttemptSetting} from "../../../../models/attemptSetting.model";
import {AttemptSettingUNT} from "../../../../models/attemptSettingUNT.model";

export const getDetailExamByIdAdapter = createEntityAdapter<AttemptSetting>();
export const getDetailExamByIdState: EntityState<AttemptSetting> = getDetailExamByIdAdapter.getInitialState();

export const getDetailUNTByIdAdapter = createEntityAdapter<AttemptSettingUNT>();
export const getDetailUNTByIdState: EntityState<AttemptSettingUNT> = getDetailUNTByIdAdapter.getInitialState();

