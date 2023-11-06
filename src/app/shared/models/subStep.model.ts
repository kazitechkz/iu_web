import {StepModel} from "./step.model";
import {SubStepContentModel} from "./subStepContent.model";
import {SubStepVideoModel} from "./subStepVideo.model";

export interface SubStepModel {
  id: number
  title_ru: string
  title_kk: string
  title_en: string | null
  step_id: number
  step: StepModel
  sub_category_id: number
  level: number
  is_active: number
  sub_step_content: SubStepContentModel | null
  sub_step_video: SubStepVideoModel | null
  sub_step_result: SubResult[]
  progress_kk: number
  progress_ru: number
  is_free: boolean
}

export interface SubResult {
  id: number
  locale_id: number
  sub_step_id: number
  user_id: number
  user_point: number
}
