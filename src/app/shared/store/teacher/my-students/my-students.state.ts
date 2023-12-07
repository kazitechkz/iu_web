import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TeacherOwnStudent} from "../../../models/user.model";

export const myStudentsAdapter = createEntityAdapter<TeacherOwnStudent[]>();
export const myStudentsState: EntityState<TeacherOwnStudent[]> = myStudentsAdapter.getInitialState();

