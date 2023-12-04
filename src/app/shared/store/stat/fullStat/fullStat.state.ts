import {ResponseData} from "../../response_data";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {FullStatModel} from "./fullStat.model";


export const fullStatAdapter = createEntityAdapter<FullStatModel>();

export const fullStatState: EntityState<FullStatModel> = fullStatAdapter.getInitialState();
