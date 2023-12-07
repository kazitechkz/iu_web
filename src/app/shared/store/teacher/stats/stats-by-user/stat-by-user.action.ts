import {createAction, props} from "@ngrx/store";
import {StatByUserActionTypes} from "./stat-by-user.action.types";
import {ResponseData} from "../../../response_data";
import {TeacherStatsByUser} from "../../../../models/teacherDashboardStatistic.model";
import {StatByUserRequest} from "./stat-by-user.request";


export const StatByUserAction = createAction(StatByUserActionTypes.OnStatByUser, props<{request: StatByUserRequest}>());
export const StatByUserSuccess = createAction(StatByUserActionTypes.OnStatByUserSuccess, props<{
    responseData: ResponseData<TeacherStatsByUser>
}>());
export const StatByUserFailure = createAction(StatByUserActionTypes.OnStatByUserFailure, props<{ errors: any }>());

