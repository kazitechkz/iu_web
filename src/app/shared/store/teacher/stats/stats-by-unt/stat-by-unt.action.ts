import {createAction, props} from "@ngrx/store";
import {StatByUntActionTypes} from "./stat-by-unt.action.types";
import {ResponseData} from "../../../response_data";
import {TeacherStatsBySubject, TeacherStatsByUNT} from "../../../../models/teacherDashboardStatistic.model";
import {StatByUntRequest} from "./stat-by-unt.request";

export const StatByUNTAction = createAction(StatByUntActionTypes.OnTeacherStatByUNT, props<StatByUntRequest>());
export const StatByUNTSuccess = createAction(StatByUntActionTypes.OnTeacherStatByUNTSuccess, props<{
    responseData: ResponseData<TeacherStatsByUNT[]>
}>());
export const StatByUNTFailure = createAction(StatByUntActionTypes.OnTeacherStatByUNTFailure, props<{ errors: any }>());

