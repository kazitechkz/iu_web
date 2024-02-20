import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ResponseData} from "../../response_data";

export const registerAdapter = createEntityAdapter<ResponseData<string>>();

export const RegisterState: EntityState<ResponseData<string>> = registerAdapter.getInitialState();
