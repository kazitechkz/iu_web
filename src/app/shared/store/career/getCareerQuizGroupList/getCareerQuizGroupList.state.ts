import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetCareerQuizGroupListModel} from "./getCareerQuizGroupList.model";

export const getCareerQuizGroupListAdapter = createEntityAdapter<GetCareerQuizGroupListModel>();

export const getCareerQuizGroupListState: EntityState<GetCareerQuizGroupListModel> = getCareerQuizGroupListAdapter.getInitialState();
