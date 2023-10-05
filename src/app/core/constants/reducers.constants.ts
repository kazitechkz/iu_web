import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";
import {resetPasswordReducer, sendResetTokenReducer} from "../../shared/store/auth/reset/Reset.reducer";
import {accountReducer} from "../../shared/store/user/account/account.reducer";
import {subjectReducer} from "../../shared/store/subject/subject.reducer";
import {getAttemptReducer} from "../../shared/store/attempt/getAttempt/getAttempt.reducer";
import {stepReducer} from "../../shared/store/step/step.reducer";
import {stepDetailReducer} from "../../shared/store/step/detail/stepDetail.reducer";
import {subStepDetailReducer, subStepReducer} from "../../shared/store/step/subStep/subStep.reducer";
import {createAttemptReducer} from "../../shared/store/attempt/createAttempt/createAttempt.reducer";
import {answerReducer} from "../../shared/store/attempt/answer/answer.reducer";
import {answeredResultReducer} from "../../shared/store/attempt/answeredResult/answerResult.reducer";
import {getFiftyFiftyReducer} from "../../shared/store/attempt/getFiftyFifty/getFiftyFifty.reducer";
import {saveQuestionReducer} from "../../shared/store/attempt/saveQuestion/saveQuestion.reducer";
import {appealTypesReducer} from "../../shared/store/appeal/appealTypes/appealTypes.reducer";
import {createAppealReducer} from "../../shared/store/appeal/createAppeal/createAppeal.reducer";
import {getStatReducer} from "../../shared/store/attempt/getStat/getStat.reducer";

export const ReducersConstants = {
  login: loginReducer,
  register: registerReducer,
  sendResetToken: sendResetTokenReducer,
  resetPassword: resetPasswordReducer,
  me: accountReducer,
  subjects:subjectReducer,
  getAttempt:getAttemptReducer,
  steps: stepReducer,
  stepDetail: stepDetailReducer,
  subSteps: subStepReducer,
  createAttempt:createAttemptReducer,
  subStepDetail: subStepDetailReducer,
  answer:answerReducer,
  answeredResult:answeredResultReducer,
  getFiftyFifty:getFiftyFiftyReducer,
  saveQuestion:saveQuestionReducer,
  appealType:appealTypesReducer,
  createAppeal:createAppealReducer,
  getUNTStat:getStatReducer,
}
