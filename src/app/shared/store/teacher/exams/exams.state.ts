import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const deleteExamByIdAdapter = createEntityAdapter<boolean>();
export const deleteExamByIdState: EntityState<boolean> = deleteExamByIdAdapter.getInitialState();
export const deleteUNTExamByIdAdapter = createEntityAdapter<boolean>();
export const deleteUNTExamByIdState: EntityState<boolean> = deleteUNTExamByIdAdapter.getInitialState();

