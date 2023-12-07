import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../../response_data";
import {TeacherStatsBySubject} from "../../../../models/teacherDashboardStatistic.model";

const stat_by_subject_id_state = createFeatureSelector<ResponseData<TeacherStatsBySubject[]>>('teacherStatBySubjectId');
export const statBySubjectIdStateSelector = createSelector(stat_by_subject_id_state, (state) => {
    return state;
})

