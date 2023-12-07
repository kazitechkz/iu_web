import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../../response_data";
import {TeacherStatsByUNT} from "../../../../models/teacherDashboardStatistic.model";

const teacher_stat_by_unt_state = createFeatureSelector<ResponseData<TeacherStatsByUNT[]>>('teacherStatByUNT');
export const teacherStatByUNTStateSelector = createSelector(teacher_stat_by_unt_state, (state) => {
    return state;
})

