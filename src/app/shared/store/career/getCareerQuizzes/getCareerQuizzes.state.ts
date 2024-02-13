import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetCareerQuizzesModel} from "./getCareerQuizzes.model";

export const getCareerQuizzesAdapter = createEntityAdapter<GetCareerQuizzesModel>();

export const getCareerQuizzesState: EntityState<GetCareerQuizzesModel> = getCareerQuizzesAdapter.getInitialState();
