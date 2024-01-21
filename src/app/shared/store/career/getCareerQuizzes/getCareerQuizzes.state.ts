import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

export const getCareerQuizzesAdapter = createEntityAdapter<Pagination<CareerQuiz[]>>();

export const getCareerQuizzesState: EntityState<Pagination<CareerQuiz[]>> = getCareerQuizzesAdapter.getInitialState();
