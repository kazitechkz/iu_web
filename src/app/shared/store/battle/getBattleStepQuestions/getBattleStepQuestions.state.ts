import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {BattleStepQuestion} from "../../../models/battleStepQuestion.model";

export const getBattleStepQuestionsAdapter = createEntityAdapter<BattleStepQuestion[]>();

export const getBattleStepQuestionsState: EntityState<BattleStepQuestion[]> = getBattleStepQuestionsAdapter.getInitialState();
