import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AttemptSetting} from "../../../../models/attemptSetting.model";

export const getDetailExamByIdAdapter = createEntityAdapter<AttemptSetting>();
export const getDetailExamByIdState: EntityState<AttemptSetting> = getDetailExamByIdAdapter.getInitialState();

