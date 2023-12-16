import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

export const createBattleStepAdapter = createEntityAdapter<GivenBattleQuestionModel>();

export const createBattleStepState: EntityState<GivenBattleQuestionModel> = createBattleStepAdapter.getInitialState();
