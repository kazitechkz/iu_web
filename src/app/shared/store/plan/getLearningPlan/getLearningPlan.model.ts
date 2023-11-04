import {Plan} from "../../../models/plan.model";

export interface GetLearningPlanModel {
    plans: Plan[]
    stat: StatPlan[]
}

export interface StatPlan {
    subject_id: string
    steps: number
    sub_steps: number
    videos: number
    contents: number
    questions: number
}
