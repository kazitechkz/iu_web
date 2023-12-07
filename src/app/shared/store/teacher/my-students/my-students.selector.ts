import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TeacherOwnStudent} from "../../../models/user.model";

const my_students_state = createFeatureSelector<ResponseData<TeacherOwnStudent[]>>('teacherMyStudents');
export const myStudentsStateSelector = createSelector(my_students_state, (state) => {
    return state;
})

