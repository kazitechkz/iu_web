import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TeacherStatsBySubject, TeacherStatsByUNT} from "../../../../models/teacherDashboardStatistic.model";

export const teacherStatByUNTAdapter = createEntityAdapter<TeacherStatsByUNT[]>();
export const teacherStatByUNTState: EntityState<TeacherStatsByUNT[]> = teacherStatByUNTAdapter.getInitialState();

