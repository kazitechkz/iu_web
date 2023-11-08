import {createAction, props} from "@ngrx/store";
import {ClassroomsActionTypes} from "./classrooms.action.types";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {ResponseData} from "../../response_data";
import {ClassroomsRequest} from "./classrooms.request";


export const classroomsGroupAction = createAction(ClassroomsActionTypes.OnClassroom);
export const classroomsGroupActionSuccess = createAction(ClassroomsActionTypes.OnClassroomSuccess, props<{
    responseData: ResponseData<ClassroomsGroupModel[]>
}>());
export const classroomsGroupActionFailure = createAction(ClassroomsActionTypes.OnClassroomFailure, props<{ errors: any }>());


export const getClassroomsGroupByIDAction = createAction(ClassroomsActionTypes.OnGetClassroomByID, props<{id: string}>());
export const getClassroomsGroupByIDActionSuccess = createAction(ClassroomsActionTypes.OnGetClassroomByIDSuccess, props<{
    responseData: ResponseData<ClassroomsGroupModel>
}>());
export const getClassroomsGroupByIDActionFailure = createAction(ClassroomsActionTypes.OnGetClassroomByIDFailure, props<{ errors: any }>());

export const createClassroomsGroupAction = createAction(ClassroomsActionTypes.OnCreateClassroom, props<{request: ClassroomsRequest}>());
export const createClassroomsGroupActionSuccess = createAction(ClassroomsActionTypes.OnCreateClassroomSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const createClassroomsGroupActionFailure = createAction(ClassroomsActionTypes.OnCreateClassroomFailure, props<{ errors: any }>());

export const updateClassroomsGroupAction = createAction(ClassroomsActionTypes.OnUpdateClassroom, props<{request: ClassroomsRequest, id: number}>());
export const updateClassroomsGroupActionSuccess = createAction(ClassroomsActionTypes.OnUpdateClassroomSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const updateClassroomsGroupActionFailure = createAction(ClassroomsActionTypes.OnUpdateClassroomFailure, props<{ errors: any }>());

export const deleteClassroomsGroupAction = createAction(ClassroomsActionTypes.OnDeleteClassroom, props<{id: number}>());
export const deleteClassroomsGroupActionSuccess = createAction(ClassroomsActionTypes.OnDeleteClassroomSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const deleteClassroomsGroupActionFailure = createAction(ClassroomsActionTypes.OnDeleteClassroomFailure, props<{ errors: any }>());
