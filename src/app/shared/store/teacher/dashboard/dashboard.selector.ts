import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";
import {TeacherDashboardStatisticModel} from "../../../models/teacherDashboardStatistic.model";

const stat_dashboard_state = createFeatureSelector<ResponseData<TeacherDashboardStatisticModel>>('statDashboard');
export const statDashboardStateSelector = createSelector(stat_dashboard_state, (state) => {
    return state;
})

