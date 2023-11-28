import {createAction, props} from "@ngrx/store";
import {FactActionTypes} from "./fact.action.types";
import {ResponseData} from "../response_data";
import {FactModel} from "../../models/fact.model";


export const factAction = createAction(FactActionTypes.OnFact, props<{subjectId: number}>());
export const factActionSuccess = createAction(FactActionTypes.OnFactSuccess, props<{
    responseData: ResponseData<FactModel>
}>());
export const factActionFailure = createAction(FactActionTypes.OnFactFailure, props<{ errors: any }>());
