import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";

export const classroomsGroupAdapter = createEntityAdapter<ClassroomsGroupModel[]>();

export const classroomsGroupState: EntityState<ClassroomsGroupModel[]> = classroomsGroupAdapter.getInitialState();
