import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {BattleAnswerResultModel} from "../../../models/battleAnswerResult.model";

export const answerBattleQuestionAdapter = createEntityAdapter<BattleAnswerResultModel>();

export const answerBattleQuestionState: EntityState<BattleAnswerResultModel> = answerBattleQuestionAdapter.getInitialState();
