import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

export const allInformationsAdapter = createEntityAdapter<Pagination<Information[]>>();

export const allInformationsState: EntityState<Pagination<Information[]>> = allInformationsAdapter.getInitialState();
