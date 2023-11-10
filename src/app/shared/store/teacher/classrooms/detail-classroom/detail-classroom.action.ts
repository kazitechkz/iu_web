import {createAction, props} from "@ngrx/store";
import {DetailClassroomActionTypes} from "./detail-classroom.action.types";
import {ResponseData} from "../../../response_data";
import {DetailClassroomModel} from "../../../../models/classroomsGroup.model";

export const detailClassroomAction = createAction(DetailClassroomActionTypes.OnDetailClassroom, props<{id: number}>());
export const detailClassroomActionSuccess = createAction(DetailClassroomActionTypes.OnDetailClassroomSuccess, props<{
    responseData: ResponseData<DetailClassroomModel[]>
}>());
export const detailClassroomActionFailure = createAction(DetailClassroomActionTypes.OnDetailClassroomFailure, props<{ errors: any }>());
