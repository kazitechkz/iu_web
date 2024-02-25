import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ResponseData} from "../../response_data";

export const sendResetTokenAdapter = createEntityAdapter<ResponseData<boolean>>();

export const SendResetPasswordState: EntityState<ResponseData<boolean>> = sendResetTokenAdapter.getInitialState();
