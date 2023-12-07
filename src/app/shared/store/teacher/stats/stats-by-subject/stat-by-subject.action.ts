import {createAction, props} from "@ngrx/store";
import {StatBySubjectActionTypes} from "./stat-by-subject.action.types";
import {ResponseData} from "../../../response_data";
import {TeacherStatsBySubject} from "../../../../models/teacherDashboardStatistic.model";
import {StatBySubjectRequest} from "./stat-by-subject.request";

export const StatBySubjectIdAction = createAction(StatBySubjectActionTypes.OnStatBySubjectId, props<StatBySubjectRequest>());
export const StatBySubjectIdSuccess = createAction(StatBySubjectActionTypes.OnStatBySubjectIdSuccess, props<{
    responseData: ResponseData<TeacherStatsBySubject[]>
}>());
export const StatBySubjectIdFailure = createAction(StatBySubjectActionTypes.OnStatBySubjectIdFailure, props<{ errors: any }>());

