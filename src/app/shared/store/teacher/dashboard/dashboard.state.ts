import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";
import {TeacherDashboardStatisticModel} from "../../../models/teacherDashboardStatistic.model";

export const statDashboardAdapter = createEntityAdapter<TeacherDashboardStatisticModel>();
export const statDashboardState: EntityState<TeacherDashboardStatisticModel> = statDashboardAdapter.getInitialState();

