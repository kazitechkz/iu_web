import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Appeal} from "../../../models/appeal.model";

export const getMyAppealQuestionByIdAdapter = createEntityAdapter<Appeal>();

export const getMyAppealQuestionByIdState: EntityState<Appeal> = getMyAppealQuestionByIdAdapter.getInitialState();
