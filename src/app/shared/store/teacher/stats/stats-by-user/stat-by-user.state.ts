import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TeacherStatsByUser} from "../../../../models/teacherDashboardStatistic.model";

export const statByUserAdapter = createEntityAdapter<TeacherStatsByUser>();
export const statByUserState: EntityState<TeacherStatsByUser> = statByUserAdapter.getInitialState();

