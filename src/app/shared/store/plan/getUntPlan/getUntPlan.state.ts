import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";

export const getUntPlanAdapter = createEntityAdapter<Plan[]>();

export const getUntPlanState: EntityState<Plan[]> = getUntPlanAdapter.getInitialState();
