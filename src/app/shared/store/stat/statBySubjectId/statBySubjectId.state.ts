import {ResponseData} from "../../response_data";
import {StatBySubjectIdModel} from "./statBySubjectId.action.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";


export const statBySubjectIdAdapter = createEntityAdapter<StatBySubjectIdModel>();

export const statBySubjectIdState: EntityState<StatBySubjectIdModel> = statBySubjectIdAdapter.getInitialState();
