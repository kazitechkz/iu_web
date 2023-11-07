import {createAction, props} from "@ngrx/store";
import {ClassroomsActionTypes} from "./classrooms.action.types";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {ResponseData} from "../../response_data";


export const classroomsGroupAction = createAction(ClassroomsActionTypes.OnClassroom);
export const classroomsGroupActionSuccess = createAction(ClassroomsActionTypes.OnClassroomSuccess, props<{
    responseData: ResponseData<ClassroomsGroupModel[]>
}>());
export const classroomsGroupActionFailure = createAction(ClassroomsActionTypes.OnClassroomFailure, props<{ errors: any }>());
