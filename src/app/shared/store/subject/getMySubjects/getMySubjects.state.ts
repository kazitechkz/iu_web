import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Subject} from "../../../models/subject.model";

export const getMySubjectsAdapter = createEntityAdapter<Subject[]>();

export const getMySubjectsState: EntityState<Subject[]> = getMySubjectsAdapter.getInitialState();
