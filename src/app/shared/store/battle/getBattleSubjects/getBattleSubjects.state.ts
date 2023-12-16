import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";

export const getBattleSubjectsAdapter = createEntityAdapter<ProposeSubjectForBattleModel>();

export const getBattleSubjectsState: EntityState<ProposeSubjectForBattleModel> = getBattleSubjectsAdapter.getInitialState();
