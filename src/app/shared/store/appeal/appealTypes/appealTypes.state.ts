import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AppealType} from "../../../models/appealType.model";

export const appealTypesAdapter = createEntityAdapter<AppealType[]>();

export const appealTypesState: EntityState<AppealType[]> = appealTypesAdapter.getInitialState();
