import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";
import {Subject} from "../../../models/subject.model";

export const checkPlanUNTAdapter = createEntityAdapter<number[]>();

export const checkPlanUNTState: EntityState<number[]> = checkPlanUNTAdapter.getInitialState();
