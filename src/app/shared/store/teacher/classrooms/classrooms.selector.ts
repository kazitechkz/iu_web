import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {ResponseData} from "../../response_data";

const get_classrooms_groups_state = createFeatureSelector<ResponseData<ClassroomsGroupModel[]>>('classroomsGroup');

export const getClassroomsGroupState = createSelector(get_classrooms_groups_state, (state) => {
    return state;
})
