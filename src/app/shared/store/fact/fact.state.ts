import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {FactModel} from "../../models/fact.model";

export const factAdapter = createEntityAdapter<FactModel>();

export const factState: EntityState<FactModel> = factAdapter.getInitialState();
