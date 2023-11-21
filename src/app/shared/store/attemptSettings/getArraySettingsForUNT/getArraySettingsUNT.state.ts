import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const getArraySettingsUNTAdapter = createEntityAdapter<Record<any, any>[]>();
export const getArraySettingsUNTState: EntityState<Record<any, any>[]> = getArraySettingsUNTAdapter.getInitialState();
