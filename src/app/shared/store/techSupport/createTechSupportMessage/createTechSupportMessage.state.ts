import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportMessage} from "../../../models/techSupportMessage.model";


export const createTechSupportMessageAdapter = createEntityAdapter<TechSupportMessage>();

export const createTechSupportMessageState: EntityState<TechSupportMessage> = createTechSupportMessageAdapter.getInitialState();
