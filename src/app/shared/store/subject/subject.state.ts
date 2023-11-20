import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../models/user.model";
import {Subject} from "../../models/subject.model";

export const subjectAllAdapter = createEntityAdapter<Subject[]>();
export const subjectAllState: EntityState<Subject[]> = subjectAllAdapter.getInitialState();
export const subjectsWithoutRequiredAllAdapter = createEntityAdapter<Subject[]>();
export const subjectsWithoutRequiredAllState: EntityState<Subject[]> = subjectsWithoutRequiredAllAdapter.getInitialState();
