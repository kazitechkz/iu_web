import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TeacherStatsByUser} from "../../../../models/teacherDashboardStatistic.model";
import {ResponseData} from "../../../response_data";

const stat_by_user_state = createFeatureSelector<ResponseData<TeacherStatsByUser>>('teacherStatByUserId');
export const statByUserStateSelector = createSelector(stat_by_user_state, (state) => {
    return state;
})

