import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "./statByAttemptId.action.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";


export const statByAttemptIdAdapter = createEntityAdapter<StatByAttemptIdModel>();

export const statByAttemptIdState: EntityState<StatByAttemptIdModel> = statByAttemptIdAdapter.getInitialState();
