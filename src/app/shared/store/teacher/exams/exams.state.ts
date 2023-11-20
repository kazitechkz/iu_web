import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";

export const deleteExamByIdAdapter = createEntityAdapter<boolean>();
export const deleteExamByIdState: EntityState<boolean> = deleteExamByIdAdapter.getInitialState();

