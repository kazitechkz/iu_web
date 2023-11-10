import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../../response_data";
import {DetailClassroomModel} from "../../../../models/classroomsGroup.model";

const get_detail_classroom_state = createFeatureSelector<ResponseData<DetailClassroomModel[]>>('detailClassroom');
export const getDetailClassroomState = createSelector(get_detail_classroom_state, (state) => {
    return state;
})
