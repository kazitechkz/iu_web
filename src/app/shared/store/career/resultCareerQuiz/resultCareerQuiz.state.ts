import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

export const resultCareerQuizAdapter = createEntityAdapter<CareerQuizAttempt>();

export const resultCareerQuizState: EntityState<CareerQuizAttempt> = resultCareerQuizAdapter.getInitialState();
