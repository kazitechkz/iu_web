import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {ResponseData} from "../../response_data";

const get_classrooms_groups_state = createFeatureSelector<ResponseData<ClassroomsGroupModel[]>>('classroomsGroup');
export const getClassroomsGroupState = createSelector(get_classrooms_groups_state, (state) => {
    return state;
})

const get_classrooms_groups_by_id_state = createFeatureSelector<ResponseData<ClassroomsGroupModel>>('getClassroomsGroupByID');
export const getClassroomsGroupByIDState = createSelector(get_classrooms_groups_by_id_state, (state) => {
    return state;
})

const create_classrooms_groups_state = createFeatureSelector<ResponseData<boolean>>('createClassroomsGroup');
export const createClassroomsGroupState = createSelector(create_classrooms_groups_state, (state) => {
    return state;
})

const update_classrooms_groups_state = createFeatureSelector<ResponseData<boolean>>('updateClassroomsGroup');
export const updateClassroomsGroupState = createSelector(update_classrooms_groups_state, (state) => {
    return state;
})

const delete_classrooms_groups_state = createFeatureSelector<ResponseData<boolean>>('deleteClassroomsGroup');
export const deleteClassroomsGroupState = createSelector(delete_classrooms_groups_state, (state) => {
    return state;
})

const delete_classroom_by_id_state = createFeatureSelector<ResponseData<boolean>>('deleteClassroomByID');
export const deleteClassroomByIDStateSelector = createSelector(delete_classroom_by_id_state, (state) => {
    return state;
})
