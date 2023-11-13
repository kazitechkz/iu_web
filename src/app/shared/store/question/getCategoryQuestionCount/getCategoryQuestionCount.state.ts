import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetCategoryQuestionCountModel} from "./getCategoryQuestionCount.model";

export const getCategoryQuestionCountAdapter = createEntityAdapter<GetCategoryQuestionCountModel>();

export const getCategoryQuestionCountState: EntityState<GetCategoryQuestionCountModel> = getCategoryQuestionCountAdapter.getInitialState();
