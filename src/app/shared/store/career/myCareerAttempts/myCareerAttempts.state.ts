import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

export const myCareerAttemptsAdapter = createEntityAdapter<Pagination<CareerQuizAttempt[]>>();

export const myCareerAttemptsState: EntityState<Pagination<CareerQuizAttempt[]>> = myCareerAttemptsAdapter.getInitialState();
