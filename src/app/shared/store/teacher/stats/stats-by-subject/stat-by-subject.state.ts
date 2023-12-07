import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TeacherStatsBySubject} from "../../../../models/teacherDashboardStatistic.model";

export const statBySubjectIdAdapter = createEntityAdapter<TeacherStatsBySubject[]>();
export const statBySubjectIdState: EntityState<TeacherStatsBySubject[]> = statBySubjectIdAdapter.getInitialState();

