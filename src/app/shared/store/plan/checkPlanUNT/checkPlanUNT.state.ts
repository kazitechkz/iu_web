import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";

export const checkPlanUNTAdapter = createEntityAdapter<boolean>();

export const checkPlanUNTState: EntityState<boolean> = checkPlanUNTAdapter.getInitialState();
