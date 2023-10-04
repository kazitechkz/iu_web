import {createAction, props} from "@ngrx/store";
import {AnswerResultActionTypes} from "../answeredResult/answerResult.action.types";
import {AnsweredResultRequest} from "../answeredResult/answerResult.request";
import {GetFiftyFiftyActionTypes} from "./getFiftyFifty.action.types";
import {GetFiftyFiftyRequest} from "./getFiftyFifty.request";
import {ResponseData} from "../../response_data";
import {AnsweredResult} from "../answeredResult/answeredResult";
import {GetFiftyFiftyModel} from "./getFiftyFifty.model";

export const onGetFiftyFiftyAction  = createAction(GetFiftyFiftyActionTypes.OnGetFiftyFifty,props<{requestData:GetFiftyFiftyRequest}>());
export const onGetFiftyFiftyActionSuccess  = createAction(GetFiftyFiftyActionTypes.OnGetFiftyFiftySuccess,props<{ responseData: ResponseData<GetFiftyFiftyModel>}>());
export const onGetFiftyFiftyActionFailure = createAction(GetFiftyFiftyActionTypes.OnGetFiftyFiftyFailure, props<{ errors: any }>());
