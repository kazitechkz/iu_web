import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";

export const statExamByIdAdapter = createEntityAdapter<StatByAttemptIdModel>();
export const statExamByIdState: EntityState<StatByAttemptIdModel> = statExamByIdAdapter.getInitialState();

