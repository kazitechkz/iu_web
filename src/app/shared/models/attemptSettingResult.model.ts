import {AttemptSetting} from "./attemptSetting.model";
import {AttemptModel} from "./attempt";

export interface AttemptSettingResult {
  setting_id: number
  attempt_id: number
  attempt_setting: AttemptSetting | null
  attempt: AttemptModel | null
}

export interface AttemptSettingUNTResult {
  setting_id: number
  attempt_id: number
  attempt_setting: AttemptSetting | null
  attempt: AttemptModel | null
}
