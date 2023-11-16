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
import {createForumReducer} from "../../shared/store/forum/createForum/createForum.reducer";
import {
  classroomsGroupReducer, createClassroomsGroupReducer, deleteClassroomByIDReducer, deleteClassroomsGroupReducer,
  getClassroomsGroupByIDReducer, updateClassroomsGroupReducer
} from "../../shared/store/teacher/classrooms/classrooms.reducer";
import {allForumReducer} from "../../shared/store/forum/allForum/allForum.reducer";
import {getForumReducer} from "../../shared/store/forum/getForum/getForum.reducer";
import {getForumDiscussReducer} from "../../shared/store/forum/getForumDiscuss/getForumDiscuss.reducer";
import {deleteRoomsReducer, joinRoomsReducer, roomsReducer} from "../../shared/store/room/rooms.reducer";
import {ratingForumReducer} from "../../shared/store/forum/ratingForum/ratingForum.reducer";
import {createDiscussReducer} from "../../shared/store/forum/createDiscuss/createDiscuss.reducer";
import {detailClassroomReducer} from "../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.reducer";
import {
  getAttemptByPromoCodeReducer
} from "../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.reducer";
import {
  createAttemptSettingsReducer
} from "../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.reducer";
import {
  getAllAttemptSettingsReducer
} from "../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.reducer";
import {
  getCategoryQuestionCountReducer
} from "../../shared/store/question/getCategoryQuestionCount/getCategoryQuestionCount.reducer";
import {
  getSubCategoryQuestionCountReducer
} from "../../shared/store/question/getSubCategoryQuestionCount/getSubCategoryQuestionCount.reducer";
import {getMySubjectsReducer} from "../../shared/store/subject/getMySubjects/getMySubjects.reducer";
import {categoryReducer} from "../../shared/store/category/category.reducer";
import {subCategoryReducer} from "../../shared/store/category/subCategory/subCategory.reducer";
import {walletIndexReducer} from "../../shared/store/wallet/walletIndex/walletIndex.reducer";
import {findUserByEmailReducer} from "../../shared/store/user/findUserByEmail/findUserByEmail.reducer";
import {myBalanceReducer} from "../../shared/store/wallet/myBalance/myBalance.reducer";
import {walletTransferReducer} from "../../shared/store/wallet/walletTransfer/walletTransfer.reducer";
import {myWalletReducer} from "../../shared/store/wallet/myWallet/myWallet.reducer";

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
  createForum:createForumReducer,
  allForum:allForumReducer,
  getForum:getForumReducer,
  getForumDiscuss:getForumDiscussReducer,
  classroomsGroup: classroomsGroupReducer,
  getClassroomsGroupByID: getClassroomsGroupByIDReducer,
  createClassroomsGroup: createClassroomsGroupReducer,
  updateClassroomsGroup: updateClassroomsGroupReducer,
  deleteClassroomsGroup: deleteClassroomsGroupReducer,
  rooms: roomsReducer,
  joinRooms: joinRoomsReducer,
  deleteRooms: deleteRoomsReducer,
  ratingForum:ratingForumReducer,
  createDiscuss:createDiscussReducer,
  detailClassroom: detailClassroomReducer,
  getAttemptByPromoCode:getAttemptByPromoCodeReducer,
  createAttemptSettings:createAttemptSettingsReducer,
  getAllAttemptSettings:getAllAttemptSettingsReducer,
  getCategoryQuestionCount:getCategoryQuestionCountReducer,
  getSubCategoryQuestionCount:getSubCategoryQuestionCountReducer,
  categories: categoryReducer,
  getMySubjects:getMySubjectsReducer,
  walletIndex:walletIndexReducer,
  walletTransfer:walletTransferReducer,
  subCategories: subCategoryReducer,
  findUserByEmail:findUserByEmailReducer,
  myBalance:myBalanceReducer,
  myWallet:myWalletReducer,
  deleteClassroomByID: deleteClassroomByIDReducer

}

