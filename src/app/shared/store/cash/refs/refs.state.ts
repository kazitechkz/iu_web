import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {RefsModel} from "./refs.model";

export const refsAdapter = createEntityAdapter<RefsModel>();

export const refsState: EntityState<RefsModel> = refsAdapter.getInitialState();
