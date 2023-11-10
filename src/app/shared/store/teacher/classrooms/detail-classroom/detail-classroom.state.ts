import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {DetailClassroomModel} from "../../../../models/classroomsGroup.model";

export const detailClassroomAdapter = createEntityAdapter<DetailClassroomModel[]>();
export const detailClassroomState: EntityState<DetailClassroomModel[]> = detailClassroomAdapter.getInitialState();

