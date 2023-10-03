import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {StepModel} from "../../../models/step.model";
import {SubStepModel} from "../../../models/subStep.model";

export const accountAdapter = createEntityAdapter<SubStepModel[]>();
export const subStepState: EntityState<SubStepModel[]> = accountAdapter.getInitialState();

export const subStepDetailAdapter = createEntityAdapter<SubStepModel>();
export const subStepDetailState: EntityState<SubStepModel> = subStepDetailAdapter.getInitialState();
