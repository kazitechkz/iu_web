import {createAction, props} from "@ngrx/store";
import {RoomsActionTypes} from "./rooms.action.types";
import {RoomsRequest} from "./rooms.request";
import {ClassroomModel} from "../../models/classroom.model";
import {ResponseData} from "../response_data";


export const RoomsAction = createAction(RoomsActionTypes.OnRoom);
export const RoomsActionSuccess = createAction(RoomsActionTypes.OnRoomSuccess, props<{
    responseData: ResponseData<ClassroomModel[]>
}>());
export const RoomsActionFailure = createAction(RoomsActionTypes.OnRoomFailure, props<{ errors: any }>());

export const joinRoomsAction = createAction(RoomsActionTypes.OnJoinRoom, props<{req: RoomsRequest}>());
export const joinRoomsActionSuccess = createAction(RoomsActionTypes.OnJoinRoomSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const joinRoomsActionFailure = createAction(RoomsActionTypes.OnJoinRoomFailure, props<{ errors: any }>());

export const deleteRoomsAction = createAction(RoomsActionTypes.OnDeleteRoom, props<{id: number}>());
export const deleteRoomsActionSuccess = createAction(RoomsActionTypes.OnDeleteRoomSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const deleteRoomsActionFailure = createAction(RoomsActionTypes.OnDeleteRoomFailure, props<{ errors: any }>());
