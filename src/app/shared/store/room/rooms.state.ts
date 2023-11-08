import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ClassroomModel} from "../../models/classroom.model";

export const roomsAdapter = createEntityAdapter<ClassroomModel[]>();
export const RoomsState: EntityState<ClassroomModel[]> = roomsAdapter.getInitialState();

export const joinRoomsAdapter = createEntityAdapter<boolean>();
export const joinRoomsState: EntityState<boolean> = joinRoomsAdapter.getInitialState();

export const deleteRoomsAdapter = createEntityAdapter<boolean>();
export const deleteRoomsState: EntityState<boolean> = deleteRoomsAdapter.getInitialState();


