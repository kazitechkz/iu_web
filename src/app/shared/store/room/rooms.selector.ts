import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ClassroomModel} from "../../models/classroom.model";
import {ResponseData} from "../response_data";

const get_rooms_state = createFeatureSelector<ResponseData<ClassroomModel[]>>('rooms');
export const getRoomsState = createSelector(get_rooms_state, (state) => {
    return state;
})

const join_rooms_state = createFeatureSelector<ResponseData<boolean>>('joinRooms');
export const joinRoomsState = createSelector(join_rooms_state, (state) => {
    return state;
})

const delete_rooms_state = createFeatureSelector<ResponseData<boolean>>('deleteRooms');
export const deleteRoomsState = createSelector(delete_rooms_state, (state) => {
    return state;
})
