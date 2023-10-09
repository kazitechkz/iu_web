import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ResultExamModel} from "../../../models/resultExam.model";

export const accountAdapter = createEntityAdapter<ResultExamModel>();
export const resultExamState: EntityState<ResultExamModel> = accountAdapter.getInitialState();
