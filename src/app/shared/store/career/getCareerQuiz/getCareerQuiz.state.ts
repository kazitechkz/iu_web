import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetCareerQuizModel} from "./getCareerQuiz.model";

export const getCareerQuizAdapter = createEntityAdapter<GetCareerQuizModel>();

export const getCareerQuizState: EntityState<GetCareerQuizModel> = getCareerQuizAdapter.getInitialState();
