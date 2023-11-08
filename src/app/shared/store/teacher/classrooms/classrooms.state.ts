import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";

export const classroomsGroupAdapter = createEntityAdapter<ClassroomsGroupModel[]>();
export const classroomsGroupState: EntityState<ClassroomsGroupModel[]> = classroomsGroupAdapter.getInitialState();

export const getClassroomsGroupByIDAdapter = createEntityAdapter<ClassroomsGroupModel>();
export const getClassroomsGroupByIDState: EntityState<ClassroomsGroupModel> = getClassroomsGroupByIDAdapter.getInitialState();

export const createClassroomsGroupAdapter = createEntityAdapter<boolean>();
export const createClassroomsGroupState: EntityState<boolean> = createClassroomsGroupAdapter.getInitialState();

export const updateClassroomsGroupAdapter = createEntityAdapter<boolean>();
export const updateClassroomsGroupState: EntityState<boolean> = updateClassroomsGroupAdapter.getInitialState();

export const deleteClassroomsGroupAdapter = createEntityAdapter<boolean>();
export const deleteClassroomsGroupState: EntityState<boolean> = deleteClassroomsGroupAdapter.getInitialState();

