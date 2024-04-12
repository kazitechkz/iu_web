import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

export const getInformationsByCategoryAdapter = createEntityAdapter<Pagination<Information[]>>();

export const getInformationsByCategoryState: EntityState<Pagination<Information[]>> = getInformationsByCategoryAdapter.getInitialState();
