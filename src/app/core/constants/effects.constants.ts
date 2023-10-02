import {LoginEffect} from "../../shared/store/auth/login/login.effect";
import {RegisterEffect} from "../../shared/store/auth/register/Register.effect";
import {ResetEffect} from "../../shared/store/auth/reset/Reset.effect";
import {AccountEffect} from "../../shared/store/user/account/account.effect";
import {SubjectEffect} from "../../shared/store/subject/subject.effect";
import {StepEffect} from "../../shared/store/step/step.effect";
import {StepDetailEffect} from "../../shared/store/step/detail/stepDetail.effect";

export const EffectsConstants = [
    LoginEffect,
    RegisterEffect,
    ResetEffect,
    AccountEffect,
    SubjectEffect,
    StepEffect,
    StepDetailEffect
]
