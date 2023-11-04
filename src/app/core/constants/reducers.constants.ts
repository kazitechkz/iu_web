import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";
import {resetPasswordReducer, sendResetTokenReducer} from "../../shared/store/auth/reset/Reset.reducer";
import {accountReducer} from "../../shared/store/user/account/account.reducer";
import {subjectReducer} from "../../shared/store/subject/subject.reducer";
import {getAttemptReducer} from "../../shared/store/attempt/getAttempt/getAttempt.reducer";
import {stepReducer} from "../../shared/store/step/step.reducer";
import {stepDetailReducer} from "../../shared/store/step/detail/stepDetail.reducer";
import {
  subStepDetailReducer,
  subStepReducer,
  subStepResultReducer
} from "../../shared/store/step/subStep/subStep.reducer";
import {createAttemptReducer} from "../../shared/store/attempt/createAttempt/createAttempt.reducer";
import {answerReducer} from "../../shared/store/attempt/answer/answer.reducer";
import {answeredResultReducer} from "../../shared/store/attempt/answeredResult/answerResult.reducer";
import {getFiftyFiftyReducer} from "../../shared/store/attempt/getFiftyFifty/getFiftyFifty.reducer";
import {saveQuestionReducer} from "../../shared/store/attempt/saveQuestion/saveQuestion.reducer";
import {appealTypesReducer} from "../../shared/store/appeal/appealTypes/appealTypes.reducer";
import {createAppealReducer} from "../../shared/store/appeal/createAppeal/createAppeal.reducer";
import {passSubStepExamReducer, subStepExamReducer} from "../../shared/store/step/exam/subStepExam.reducer";
import {getStatReducer} from "../../shared/store/attempt/getStat/getStat.reducer";
import {finishAttemptReducer} from "../../shared/store/attempt/finishAttempt/finishAttempt.reducer";
import {allAttemptReducer} from "../../shared/store/attempt/allAttempt/allAttempt.reducer";
import {resultExamReducer} from "../../shared/store/step/resultExam/resultExam.reducer";
import {getUntStatReducer} from "../../shared/store/attempt/getUntStat/getUntStat.reducer";
import {getAllTournamentReducer} from "../../shared/store/tournament/getAllTournament/getAllTournament.reducer";
import {getTournamentDetailReducer} from "../../shared/store/tournament/getTournamentDetail/getTournamentDetail.reducer";
import {getSubTournamentDetailReducer} from "../../shared/store/tournament/getSubTournamentDetail/getSubTournamentDetail.reducer";
import {getSubTournamentParticipantsReducer} from "../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.reducer";
import {createTournamentAttemptReducer} from "../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.reducer";
import {getSubTournamentResultsReducer} from "../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.reducer";
import {getSubTournamentRivalsReducer} from "../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.reducer";
import {getSubTournamentWinnersReducer} from "../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.reducer";
import {sidenavReducer} from "../../shared/store/core/sidebar/sidebar.reducer";
import {resultByAttemptIdReducer} from "../../shared/store/stat/resultByAttemptId/resultByAttemptId.reducer";
import {statBySubjectIdReducer} from "../../shared/store/stat/statBySubjectId/statBySubjectId.reducer";
import {statByAttemptIdReducer} from "../../shared/store/stat/statByAttemptId/statByAttemptId.reducer";
import {getUntPlanReducer} from "../../shared/store/plan/getUntPlan/getUntPlan.reducer";
import {getLearningPlanReducer} from "../../shared/store/plan/getLearningPlan/getLearningPlan.reducer";

export const ReducersConstants = {
  login: loginReducer,
  register: registerReducer,
  sendResetToken: sendResetTokenReducer,
  resetPassword: resetPasswordReducer,
  me: accountReducer,
  subjects: subjectReducer,
  getAttempt: getAttemptReducer,
  steps: stepReducer,
  stepDetail: stepDetailReducer,
  subSteps: subStepReducer,
  createAttempt: createAttemptReducer,
  subStepDetail: subStepDetailReducer,
  subStepExam: subStepExamReducer,
  passSubStepExam: passSubStepExamReducer,
  answer: answerReducer,
  answeredResult: answeredResultReducer,
  getFiftyFifty: getFiftyFiftyReducer,
  saveQuestion: saveQuestionReducer,
  appealType: appealTypesReducer,
  createAppeal: createAppealReducer,
  getUNTStat: getStatReducer,
  finishAttempt: finishAttemptReducer,
  allAttempt:allAttemptReducer,
  resultStepExam: resultExamReducer,
  untTotalStat:getUntStatReducer,
  getAllTournament:getAllTournamentReducer,
  getTournamentDetail:getTournamentDetailReducer,
  participateTournament:passSubStepExamReducer,
  getSubTournamentDetail:getSubTournamentDetailReducer,
  subStepResult: subStepResultReducer,
  getSubTournamentParticipants:getSubTournamentParticipantsReducer,
  getSubTournamentWinners:getSubTournamentWinnersReducer,
  getSubTournamentRivals:getSubTournamentRivalsReducer,
  getSubTournamentResults:getSubTournamentResultsReducer,
  createTournamentAttempt:createTournamentAttemptReducer,
  sidenav: sidenavReducer,
  resultByAttemptId:resultByAttemptIdReducer,
  statByAttemptId:statByAttemptIdReducer,
  statBySubjectId:statBySubjectIdReducer,
  getUntPlan:getUntPlanReducer,
  getLearningPlan:getLearningPlanReducer,
}
