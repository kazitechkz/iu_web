import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";
import {resetPasswordReducer, sendResetTokenReducer} from "../../shared/store/auth/reset/Reset.reducer";
import {accountReducer, changeAccountReducer} from "../../shared/store/user/account/account.reducer";
import {subjectReducer, subjectsWithoutRequiredReducer} from "../../shared/store/subject/subject.reducer";
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
import {walletStatisticsReducer} from "../../shared/store/wallet/walletStatistics/walletStatistics.reducer";
import {getImportantNewsReducer} from "../../shared/store/news/getImportantNews/getImportantNews.reducer";
import {allNewsReducer} from "../../shared/store/news/allNews/allNews.reducer";
import {getSingleNewsReducer} from "../../shared/store/news/getSingleNews/getSingleNews.reducer";
import {deleteExamByIdReducer} from "../../shared/store/teacher/exams/exams.reducer";
import {
  createAttemptSettingsUNTReducer
} from "../../shared/store/attemptSettings/createAttemptSettingsUNT/createAttemptSettingsUNT.reducer";
import {
  getArraySettingsUNTReducer
} from "../../shared/store/attemptSettings/getArraySettingsForUNT/getArraySettingsUNT.reducer";
import {
  getAllAnnouncementsReducer
} from "../../shared/store/announcement/getAllAnnouncements/getAllAnnouncements.reducer";
import {checkNotificationReducer} from "../../shared/store/notification/checkNotification/checkNotification.reducer";
import {getNotificationAllReducer} from "../../shared/store/notification/getNotificationAll/getNotificationAll.reducer";
import {
  getUnreadMessageCountReducer
} from "../../shared/store/notification/getUnreadMessageCount/getUnreadMessageCount.reducer";
import {myNotificationIdsReducer} from "../../shared/store/notification/myNotificationIds/myNotificationIds.reducer";
import {
  getNotificationTypeAllReducer
} from "../../shared/store/notification/getNotificationTypeAll/getNotificationTypeAll.reducer";
import {
  getAllAttemptSettingsUNTReducer
} from "../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.reducer";
import {
  getDetailExamByIdReducer,
  getDetailUNTByIdReducer
} from "../../shared/store/teacher/exams/detail-exam/detail-exam.reducer";
import {statExamByIdReducer} from "../../shared/store/teacher/stats/stat-by-attempt.reducer";
import {
  getTechSupportTypesReducer
} from "../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.reducer";
import {
  getTechSupportCategoriesReducer
} from "../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.reducer";
import {
  getMyTechSupportTicketsReducer
} from "../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.reducer";
import {
  getTechSupportTicketDetailReducer
} from "../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.reducer";
import {
  createTechSupportTicketReducer
} from "../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.reducer";
import {
  createTechSupportMessageReducer
} from "../../shared/store/techSupport/createTechSupportMessage/createTechSupportMessage.reducer";
import {
  closeTechSupportTicketReducer
} from "../../shared/store/techSupport/closeTechSupportTicket/closeTechSupportTicket.reducer";
import {statDashboardReducer} from "../../shared/store/teacher/dashboard/dashboard.reducer";
import {factReducer} from "../../shared/store/fact/fact.reducer";
import {teacherStatBySubjectIdReducer} from "../../shared/store/teacher/stats/stats-by-subject/stat-by-subject.reducer";
import {teacherStatByUNTReducer} from "../../shared/store/teacher/stats/stats-by-unt/stat-by-unt.reducer";
import {allAttemptTypesReducer} from "../../shared/store/attempt/allAttemptTypes/allAttemptTypes.reducer";
import {FullStatEffect} from "../../shared/store/stat/fullStat/fullStat.effect";
import {fullStatReducer} from "../../shared/store/stat/fullStat/fullStat.reducer";
import {getMySavedQuestionsReducer} from "../../shared/store/question/getMySavedQuestions/getMySavedQuestions.reducer";
import {
  getMySavedQuestionByIdReducer
} from "../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.reducer";
import {getMyAppealQuestionsReducer} from "../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.reducer";
import {
  getMyAppealQuestionByIdReducer
} from "../../shared/store/appeal/getMyAppealQuestionById/getMyAppealQuestionById.reducer";
import {teacherMyStudentsReducer} from "../../shared/store/teacher/my-students/my-students.reducer";
import {teacherStatByUserReducer} from "../../shared/store/teacher/stats/stats-by-user/stat-by-user.reducer";
import {checkPlanUNTReducer} from "../../shared/store/plan/checkPlanUNT/checkPlanUNT.reducer";
import {
  getMyAttemptSingleSettingsReducer
} from "../../shared/store/attemptSettings/getMyAttemptSingleSettings/getMyAttemptSingleSettings.reducer";
import {
  getMyAttemptUNTSettingsReducer
} from "../../shared/store/attemptSettings/getMyAttemptUNTSettings/getMyAttemptUNTSettings.reducer";
import {getActiveBattlesReducer} from "../../shared/store/battle/getActiveBattles/getActiveBattles.reducer";
import {createBattleReducer} from "../../shared/store/battle/createBattle/createBattle.reducer";
import {getBattleByPromoReducer} from "../../shared/store/battle/getBattleByPromo/getBattleByPromo.reducer";
import {getBattleSubjectsReducer} from "../../shared/store/battle/getBattleSubjects/getBattleSubjects.reducer";
import {getBattleStepReducer} from "../../shared/store/battle/getBattleStep/getBattleStep.reducer";
import {joinToBattleReducer} from "../../shared/store/battle/joinToBattle/joinToBattle.reducer";
import {createBattleStepReducer} from "../../shared/store/battle/createBattleStep/createBattleStep.reducer";
import {answerBattleQuestionReducer} from "../../shared/store/battle/answerBattleQuestion/answerBattleQuestion.reducer";
import {finishBattleResultReducer} from "../../shared/store/battle/finishBattleResult/finishBattleResult.reducer";
import {myActiveBattlesReducer} from "../../shared/store/battle/myActiveBattles/myActiveBattles.reducer";
import {
  participantTournamentReducer, payTournamentReducer
} from "../../shared/store/tournament/participateTournament/participateTournament.reducer";
import {payCreateReducer} from "../../shared/store/paybox/pay_create/payCreate.reducer";
import {getCareerQuizzesReducer} from "../../shared/store/career/getCareerQuizzes/getCareerQuizzes.reducer";
import {getCareerQuizReducer} from "../../shared/store/career/getCareerQuiz/getCareerQuiz.reducer";
import {passCareerQuizReducer} from "../../shared/store/career/passCareerQuiz/passCareerQuiz.reducer";
import {finishCareerQuizReducer} from "../../shared/store/career/finishCareerQuiz/finishCareerQuiz.reducer";
import {resultCareerQuizReducer} from "../../shared/store/career/resultCareerQuiz/resultCareerQuiz.reducer";
import {walletRatingReducer} from "../../shared/store/wallet/walletRating/walletRating.reducer";
import {myOrderReducer} from "../../shared/store/paybox/my_orders/myOrder.reducer";
import {
  getCareerQuizGroupListReducer
} from "../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.reducer";
import {myCareerAttemptsReducer} from "../../shared/store/career/myCareerAttempts/myCareerAttempts.reducer";
import {payCareerReducer} from "../../shared/store/career/payCareer/payCareer.reducer";
import {userCheckReducer} from "../../shared/store/auth/userCheck/userCheck.reducer";
import {getMainVideosReducer} from "../../shared/store/iutube/getMainVideos/getMainVideos.reducer";
import {getAllVideosReducer} from "../../shared/store/iutube/getAllVideos/getAllVideos.reducer";
import {getVideoAuthorDetailReducer} from "../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.reducer";
import {getVideoDetailReducer} from "../../shared/store/iutube/getVideoDetail/getVideoDetail.reducer";
import {verifyEmailReducer} from "../../shared/store/auth/verifyEmail/verifyEmail.reducer";
import {kundelikReducer} from "../../shared/store/auth/kundelik/kundelik.reducer";
import {promoReducer} from "../../shared/store/promo/promo.reducer";
import {passSubStepReducer} from "../../shared/store/stat/passSubStep/passSubStep.reducer";
import {
  getTournamentAwardsReducer
} from "../../shared/store/tournament/getTournamentAwards/getTournamentAwards.reducer";
import {
  getBattleStepQuestionsReducer
} from "../../shared/store/battle/getBattleStepQuestions/getBattleStepQuestions.reducer";
import {
  getAIAnswerOnQuestionReducer
} from "../../shared/store/openAI/getAIAnswerOnQuestion/getAIAnswerOnQuestion.reducer";
import {getBattleStatsReducer} from "../../shared/store/battle/getBattleStats/getBattleStats.reducer";
import {getBattleHistoryReducer} from "../../shared/store/battle/getBattleHistory/getBattleHistory.reducer";
import {
  getListOfTournamentsReducer
} from "../../shared/store/tournament/getListOfTournaments/getListOfTournaments.reducer";
import {allInformationsReducer} from "../../shared/store/information/allInformations/allInformations.reducer";
import {getInformationReducer} from "../../shared/store/information/getInformation/getInformation.reducer";
import {
  getInformationsByCategoryReducer
} from "../../shared/store/information/getInformationsByCategory/getInformationsByCategory.reducer";
import {hottestInformationReducer} from "../../shared/store/information/hottestInformation/hottestInformation.reducer";

export const ReducersConstants = {
  login: loginReducer,
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  kundelik: kundelikReducer,
  sendResetToken: sendResetTokenReducer,
  resetPassword: resetPasswordReducer,
  me: accountReducer,
  changeProfile: changeAccountReducer,
  subjects: subjectReducer,
  getAttempt: getAttemptReducer,
  steps: stepReducer,
  stepDetail: stepDetailReducer,
  subSteps: subStepReducer,
  createAttempt: createAttemptReducer,
  subStepDetail: subStepDetailReducer,
  subStepExam: subStepExamReducer,
  passSubStepExam: passSubStepExamReducer,
  passSubStepBySubCategory: passSubStepReducer,
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
  participateTournament:participantTournamentReducer,
  payTournament:payTournamentReducer,
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
  promo:promoReducer,
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
  createAttemptSettingsUNT:createAttemptSettingsUNTReducer,
  getAllAttemptSettings:getAllAttemptSettingsReducer,
  getAllAttemptSettingsUNT:getAllAttemptSettingsUNTReducer,
  getCategoryQuestionCount:getCategoryQuestionCountReducer,
  getSubCategoryQuestionCount:getSubCategoryQuestionCountReducer,
  categories: categoryReducer,
  getMySubjects:getMySubjectsReducer,
  walletIndex:walletIndexReducer,
  walletRating:walletRatingReducer,
  walletStatistics:walletStatisticsReducer,
  walletTransfer:walletTransferReducer,
  subCategories: subCategoryReducer,
  findUserByEmail:findUserByEmailReducer,
  myBalance:myBalanceReducer,
  myWallet:myWalletReducer,
  deleteClassroomByID: deleteClassroomByIDReducer,
  getImportantNews:getImportantNewsReducer,
  allNews:allNewsReducer,
  getSingleNews:getSingleNewsReducer,
  deleteExamById: deleteExamByIdReducer,
  subjectsWithoutRequired: subjectsWithoutRequiredReducer,
  getArraySettingsUNT: getArraySettingsUNTReducer,
  getAllAnnouncements:getAllAnnouncementsReducer,
  checkNotification:checkNotificationReducer,
  getNotificationAll:getNotificationAllReducer,
  getUnreadMessageCount:getUnreadMessageCountReducer,
  myNotificationIds:myNotificationIdsReducer,
  getNotificationTypeAll:getNotificationTypeAllReducer,
  getDetailExamById: getDetailExamByIdReducer,
  statExamById: statExamByIdReducer,
  getDetailUNTById: getDetailUNTByIdReducer,
  statDashboard: statDashboardReducer,
  getTechSupportTypes:getTechSupportTypesReducer,
  getTechSupportCategories:getTechSupportCategoriesReducer,
  getMyTechSupportTickets:getMyTechSupportTicketsReducer,
  getTechSupportTicketDetail:getTechSupportTicketDetailReducer,
  createTechSupportTicket:createTechSupportTicketReducer,
  createTechSupportMessage:createTechSupportMessageReducer,
  closeTechSupportTicket:closeTechSupportTicketReducer,
  facts: factReducer,
  teacherStatBySubjectId: teacherStatBySubjectIdReducer,
  teacherStatByUNT: teacherStatByUNTReducer,
  allAttemptTypes:allAttemptTypesReducer,
  fullStat:fullStatReducer,
  getMySavedQuestions:getMySavedQuestionsReducer,
  getMySavedQuestionById:getMySavedQuestionByIdReducer,
  getMyAppealQuestions:getMyAppealQuestionsReducer,
  getMyAppealQuestionById:getMyAppealQuestionByIdReducer,
  teacherMyStudents: teacherMyStudentsReducer,
  teacherStatByUserId: teacherStatByUserReducer,
  checkPlanUNT:checkPlanUNTReducer,
  getMySingleSettings:getMyAttemptSingleSettingsReducer,
  getMyUNTSettings:getMyAttemptUNTSettingsReducer,
  getActiveBattles:getActiveBattlesReducer,
  createBattle:createBattleReducer,
  createBattleStep:createBattleStepReducer,
  getBattleByPromo:getBattleByPromoReducer,
  getBattleSubjects:getBattleSubjectsReducer,
  getBattleStep:getBattleStepReducer,
  joinToBattle:joinToBattleReducer,
  answerBattleQuestion:answerBattleQuestionReducer,
  finishBattleResult:finishBattleResultReducer,
  myActiveBattles:myActiveBattlesReducer,
  getCareerQuizzes:getCareerQuizzesReducer,
  getCareerQuiz:getCareerQuizReducer,
  passCareerQuiz:passCareerQuizReducer,
  finishCareerQuiz:finishCareerQuizReducer,
  resultCareerQuiz:resultCareerQuizReducer,
  payCreate: payCreateReducer,
  myOrder: myOrderReducer,
  getCareerQuizGroupList:getCareerQuizGroupListReducer,
  myCareerAttempts:myCareerAttemptsReducer,
  payCareer:payCareerReducer,
  userCheck:userCheckReducer,
  getMainVideos:getMainVideosReducer,
  getAllVideos:getAllVideosReducer,
  getVideoAuthorDetail:getVideoAuthorDetailReducer,
  getVideoDetail:getVideoDetailReducer,
  getTournamentAwards:getTournamentAwardsReducer,
  getBattleStepQuestions:getBattleStepQuestionsReducer,
  getAIAnswerOnQuestion:getAIAnswerOnQuestionReducer,
  getBattleStats:getBattleStatsReducer,
  getBattleHistory:getBattleHistoryReducer,
  getListOfTournaments:getListOfTournamentsReducer,
  allInformations:allInformationsReducer,
  getInformation:getInformationReducer,
  getInformationsByCategory:getInformationsByCategoryReducer,
  hottestInformation:hottestInformationReducer,
}

