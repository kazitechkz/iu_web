import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {SubStepExamModel} from "../../../models/question.model";

export const accountAdapter = createEntityAdapter<SubStepExamModel[]>();
export const subStepExamState: EntityState<SubStepExamModel[]> = accountAdapter.getInitialState();
