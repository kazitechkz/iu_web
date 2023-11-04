import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";
import {GetLearningPlanModel} from "./getLearningPlan.model";

export const getLearningPlanAdapter = createEntityAdapter<GetLearningPlanModel>();

export const getLearningPlanState: EntityState<GetLearningPlanModel> = getLearningPlanAdapter.getInitialState();
