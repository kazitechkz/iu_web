import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {SubStepModel} from "../../../models/subStep.model";

export const passSubStepAdapter = createEntityAdapter<SubStepModel[]>();
export const passSubStepState: EntityState<SubStepModel[]> = passSubStepAdapter.getInitialState();
