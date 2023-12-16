import {Subject} from "./subject.model";

export interface ProposeSubjectForBattleModel{
  chosen_subject:number|null
  subjects:Subject[]|null
}
