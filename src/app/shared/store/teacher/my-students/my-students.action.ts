import {createAction, props} from "@ngrx/store";
import {MyStudentsActionTypes} from "./my-students.action.types";
import {ResponseData} from "../../response_data";
import {TeacherOwnStudent} from "../../../models/user.model";


export const MyStudentsAction = createAction(MyStudentsActionTypes.OnMyStudents);
export const MyStudentsSuccess = createAction(MyStudentsActionTypes.OnMyStudentsSuccess, props<{
    responseData: ResponseData<TeacherOwnStudent[]>
}>());
export const MyStudentsFailure = createAction(MyStudentsActionTypes.OnMyStudentsFailure, props<{ errors: any }>());

