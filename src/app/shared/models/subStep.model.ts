import {StepModel} from "./step.model";

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
  progress: number
}
