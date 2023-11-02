import {ResponseData} from "../../response_data";
import {ResultByAttemptIdModel} from "./resultByAttemptId.action.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";


export const resultByAttemptIdAdapter = createEntityAdapter<ResultByAttemptIdModel>();

export const resultByAttemptIdState: EntityState<ResultByAttemptIdModel> = resultByAttemptIdAdapter.getInitialState();
