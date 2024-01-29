import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {CareerQuiz} from "../../../models/careerQuiz.model";

export const passCareerQuizAdapter = createEntityAdapter<CareerQuiz>();

export const passCareerQuizState: EntityState<CareerQuiz> = passCareerQuizAdapter.getInitialState();
