import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {StepModel} from "../../models/step.model";

export const accountAdapter = createEntityAdapter<StepModel[]>();

export const stepState: EntityState<StepModel[]> = accountAdapter.getInitialState();
