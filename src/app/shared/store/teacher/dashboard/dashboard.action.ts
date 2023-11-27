import {createAction, props} from "@ngrx/store";
import {DashboardActionTypes} from "./dashboard.action.types";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";
import {TeacherDashboardStatisticModel} from "../../../models/teacherDashboardStatistic.model";


export const StatDashboardAction = createAction(DashboardActionTypes.OnDashboard);
export const StatDashboardSuccess = createAction(DashboardActionTypes.OnDashboardSuccess, props<{
    responseData: ResponseData<TeacherDashboardStatisticModel>
}>());
export const StatDashboardFailure = createAction(DashboardActionTypes.OnDashboardFailure, props<{ errors: any }>());

