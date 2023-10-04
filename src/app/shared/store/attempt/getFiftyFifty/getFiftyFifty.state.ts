import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AnsweredResult} from "../answeredResult/answeredResult";
import {GetFiftyFiftyModel} from "./getFiftyFifty.model";

export const getFiftyFiftyAdapter = createEntityAdapter<GetFiftyFiftyModel>();

export const getFiftyFiftyState: EntityState<GetFiftyFiftyModel> = getFiftyFiftyAdapter.getInitialState();
