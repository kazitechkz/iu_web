import {LoginEffect} from "../../shared/store/auth/login/login.effect";
import {RegisterEffect} from "../../shared/store/auth/register/Register.effect";
import {ResetEffect} from "../../shared/store/auth/reset/Reset.effect";
import {AccountEffect} from "../../shared/store/user/account/account.effect";
import {SubjectEffect} from "../../shared/store/subject/subject.effect";
import {GetAttemptEffect} from "../../shared/store/attempt/getAttempt/getAttempt.effect";
import {StepEffect} from "../../shared/store/step/step.effect";
import {StepDetailEffect} from "../../shared/store/step/detail/stepDetail.effect";
import {CreateAttemptEffect} from "../../shared/store/attempt/createAttempt/createAttempt.effect";
import {CreateAnswerEffect} from "../../shared/store/attempt/answer/answer.effect";
import {
  GetAnsweredResultEffect
} from "../../shared/store/attempt/answeredResult/answerResult.effect";
import {SubStepDetailEffect, SubStepEffect} from "../../shared/store/step/subStep/subStep.effect";
import {GetFiftyFiftyEffect} from "../../shared/store/attempt/getFiftyFifty/getFiftyFifty.effect";
import {SaveQuestionEffect} from "../../shared/store/attempt/saveQuestion/saveQuestion.effect";
import {AppealTypesEffect} from "../../shared/store/appeal/appealTypes/appealTypes.effect";
import {CreateAppealEffect} from "../../shared/store/appeal/createAppeal/createAppeal.effect";
import {GetStatEffect} from "../../shared/store/attempt/getStat/getStat.effect";

export const EffectsConstants = [
    LoginEffect,
    RegisterEffect,
    ResetEffect,
    AccountEffect,
    SubjectEffect,
    GetAttemptEffect,
    SubjectEffect,
    StepEffect,
    StepDetailEffect,
    SubStepEffect,
    CreateAttemptEffect,
    SubStepDetailEffect,
    CreateAnswerEffect,
    GetAnsweredResultEffect,
    GetFiftyFiftyEffect,
    SaveQuestionEffect,
    AppealTypesEffect,
    CreateAppealEffect,
    GetStatEffect,
]
