import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {HottestInformationModel} from "./hottestInformation.model";

export const hottestInformationAdapter = createEntityAdapter<HottestInformationModel>();

export const hottestInformationState: EntityState<HottestInformationModel> = hottestInformationAdapter.getInitialState();
