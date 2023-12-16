import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

export const getBattleStepAdapter = createEntityAdapter<GivenBattleQuestionModel>();

export const getBattleStepState: EntityState<GivenBattleQuestionModel> = getBattleStepAdapter.getInitialState();
