import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {CareerQuiz} from "../../../models/careerQuiz.model";

export const getCareerQuizAdapter = createEntityAdapter<CareerQuiz>();

export const getCareerQuizState: EntityState<CareerQuiz> = getCareerQuizAdapter.getInitialState();
