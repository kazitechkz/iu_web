import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportType} from "../../../models/techSupportType.model";


export const getTechSupportTypesAdapter = createEntityAdapter<TechSupportType[]>();

export const getTechSupportTypesState: EntityState<TechSupportType[]> = getTechSupportTypesAdapter.getInitialState();
