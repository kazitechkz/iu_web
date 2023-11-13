import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetSubCategoryQuestionCountModel} from "./getSubCategoryQuestionCount.model";

export const getSubCategoryQuestionCountAdapter = createEntityAdapter<GetSubCategoryQuestionCountModel>();

export const getSubCategoryQuestionCountState: EntityState<GetSubCategoryQuestionCountModel> = getSubCategoryQuestionCountAdapter.getInitialState();
