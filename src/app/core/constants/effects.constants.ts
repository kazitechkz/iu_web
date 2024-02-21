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
import {SubStepDetailEffect, SubStepEffect, SubStepResultEffect} from "../../shared/store/step/subStep/subStep.effect";
import {GetFiftyFiftyEffect} from "../../shared/store/attempt/getFiftyFifty/getFiftyFifty.effect";
import {SaveQuestionEffect} from "../../shared/store/attempt/saveQuestion/saveQuestion.effect";
import {AppealTypesEffect} from "../../shared/store/appeal/appealTypes/appealTypes.effect";
import {CreateAppealEffect} from "../../shared/store/appeal/createAppeal/createAppeal.effect";
import {PassSubStepExamEffect, SubStepExamEffect} from "../../shared/store/step/exam/subStepExam.effect";
import {GetStatEffect} from "../../shared/store/attempt/getStat/getStat.effect";
import {FinishAttemptEffect} from "../../shared/store/attempt/finishAttempt/finishAttempt.effect";
import {AllAttemptEffect} from "../../shared/store/attempt/allAttempt/allAttempt.effect";
import {ResultExamEffect} from "../../shared/store/step/resultExam/resultExam.effect";
import {GetUntStatEffect} from "../../shared/store/attempt/getUntStat/getUntStat.effect";
import {GetAllTournamentEffect} from "../../shared/store/tournament/getAllTournament/getAllTournament.effect";
import {GetTournamentDetailEffect} from "../../shared/store/tournament/getTournamentDetail/getTournamentDetail.effect";
import {ParticipateTournamentEffect} from "../../shared/store/tournament/participateTournament/participateTournament.effect";
import {GetSubTournamentDetailEffect} from "../../shared/store/tournament/getSubTournamentDetail/getSubTournamentDetail.effect";
import {GetSubTournamentParticipantsEffect} from "../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.effect";
import {GetSubTournamentResultsEffect} from "../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.effect";
import {CreateTournamentAttemptEffect} from "../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.effect";
import {GetSubTournamentRivalsEffect} from "../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.effect";
import {GetSubTournamentWinnersEffect} from "../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.effect";
import {SidenavEffects} from "../../shared/store/core/sidebar/sidebar.effect";
import {ResultByAttemptIdEffect} from "../../shared/store/stat/resultByAttemptId/resultByAttemptId.effect";
import {StatByAttemptIdEffect} from "../../shared/store/stat/statByAttemptId/statByAttemptId.effect";
import {StatBySubjectIdEffect} from "../../shared/store/stat/statBySubjectId/statBySubjectId.effect";
import {GetUntPlanEffect} from "../../shared/store/plan/getUntPlan/getUntPlan.effect";
import {GetLearningPlanEffect} from "../../shared/store/plan/getLearningPlan/getLearningPlan.effect";
import {CreateForumEffect} from "../../shared/store/forum/createForum/createForum.effect";
import {ClassroomsGroupEffect} from "../../shared/store/teacher/classrooms/classrooms.effect";
import {AllForumEffect} from "../../shared/store/forum/allForum/allForum.effect";
import {GetForumEffect} from "../../shared/store/forum/getForum/getForum.effect";
import {GetForumDiscussEffect} from "../../shared/store/forum/getForumDiscuss/getForumDiscuss.effect";
import {RoomsEffect} from "../../shared/store/room/rooms.effect";
import {RatingForumEffect} from "../../shared/store/forum/ratingForum/ratingForum.effect";
import {CreateDiscussEffect} from "../../shared/store/forum/createDiscuss/createDiscuss.effect";
import {DetailClassroomEffect} from "../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.effect";
import {
  GetAttemptByPromoCodeEffect
} from "../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.effect";
import {
  CreateAttemptSettingsEffect
} from "../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.effect";
import {
  GetAllAttemptSettingsEffect
} from "../../shared/store/attemptSettings/getAllAttemptSettings/getAllAttemptSettings.effect";
import {
  GetCategoryQuestionCountEffect
} from "../../shared/store/question/getCategoryQuestionCount/getCategoryQuestionCount.effect";
import {
  GetSubCategoryQuestionCountEffect
} from "../../shared/store/question/getSubCategoryQuestionCount/getSubCategoryQuestionCount.effect";
import {CategoryEffect} from "../../shared/store/category/category.effect";
import {GetMySubjectsEffect} from "../../shared/store/subject/getMySubjects/getMySubjects.effect";
import {SubCategoryEffect} from "../../shared/store/category/subCategory/subCategory.effect";
import {WalletIndexEffect} from "../../shared/store/wallet/walletIndex/walletIndex.effect";
import {WalletTransferEffect} from "../../shared/store/wallet/walletTransfer/walletTransfer.effect";
import {MyBalanceEffect} from "../../shared/store/wallet/myBalance/myBalance.effect";
import {FindUserByEmailEffect} from "../../shared/store/user/findUserByEmail/findUserByEmail.effect";
import {MyWalletEffect} from "../../shared/store/wallet/myWallet/myWallet.effect";
import {WalletStatisticsEffect} from "../../shared/store/wallet/walletStatistics/walletStatistics.effect";
import {AllNewsEffect} from "../../shared/store/news/allNews/allNews.effect";
import {GetImportantNewsEffect} from "../../shared/store/news/getImportantNews/getImportantNews.effect";
import {GetSingleNewsEffect} from "../../shared/store/news/getSingleNews/getSingleNews.effect";
import {ExamsEffect} from "../../shared/store/teacher/exams/exams.effect";
import {
  CreateAttemptSettingsUNTEffect
} from "../../shared/store/attemptSettings/createAttemptSettingsUNT/createAttemptSettingsUNT.effect";
import {
  GetArraySettingsUNTEffect
} from "../../shared/store/attemptSettings/getArraySettingsForUNT/getArraySettingsUNT.effect";
import {CheckNotificationEffect} from "../../shared/store/notification/checkNotification/checkNotification.effect";
import {GetNotificationAllEffect} from "../../shared/store/notification/getNotificationAll/getNotificationAll.effect";
import {
  GetUnreadMessageCountEffect
} from "../../shared/store/notification/getUnreadMessageCount/getUnreadMessageCount.effect";
import {MyNotificationIdsEffect} from "../../shared/store/notification/myNotificationIds/myNotificationIds.effect";
import {
  GetAllAnnouncementsEffect
} from "../../shared/store/announcement/getAllAnnouncements/getAllAnnouncements.effect";
import {
  GetNotificationTypeAllEffect
} from "../../shared/store/notification/getNotificationTypeAll/getNotificationTypeAll.effect";
import {
  GetAllAttemptSettingsUNTEffect
} from "../../shared/store/attemptSettings/getAllAttemptSettingsUNT/getAllAttemptSettingsUNT.effect";
import {DetailExamEffect} from "../../shared/store/teacher/exams/detail-exam/detail-exam.effect";
import {StatByAttemptEffect} from "../../shared/store/teacher/stats/stat-by-attempt.effect";
import {GetTechSupportTypesEffect} from "../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.effect";
import {
    GetTechSupportCategoriesEffect
} from "../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.effect";
import {
    GetMyTechSupportTicketsEffect
} from "../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.effect";
import {
    GetTechSupportTicketDetailEffect
} from "../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.effect";
import {
    CreateTechSupportTicketEffect
} from "../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.effect";
import {
    CreateTechSupportMessageEffect
} from "../../shared/store/techSupport/createTechSupportMessage/createTechSupportMessage.effect";
import {
    CloseTechSupportTicketEffect
} from "../../shared/store/techSupport/closeTechSupportTicket/closeTechSupportTicket.effect";
import {TeacherDashboardEffect} from "../../shared/store/teacher/dashboard/dashboard.effect";
import {FactEffect} from "../../shared/store/fact/fact.effect";
import {StatBySubjectEffect} from "../../shared/store/teacher/stats/stats-by-subject/stat-by-subject.effect";
import {StatByUntEffect} from "../../shared/store/teacher/stats/stats-by-unt/stat-by-unt.effect";
import {FullStatEffect} from "../../shared/store/stat/fullStat/fullStat.effect";
import {AllAttemptTypesEffect} from "../../shared/store/attempt/allAttemptTypes/allAttemptTypes.effect";
import {GetMySavedQuestionsEffect} from "../../shared/store/question/getMySavedQuestions/getMySavedQuestions.effect";
import {GetMyAppealQuestionsEffect} from "../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.effect";
import {
  GetMySavedQuestionByIdEffect
} from "../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.effect";
import {
  GetMyAppealQuestionByIdEffect
} from "../../shared/store/appeal/getMyAppealQuestionById/getMyAppealQuestionById.effect";
import {MyStudentsEffect} from "../../shared/store/teacher/my-students/my-students.effect";
import {StatByUserEffect} from "../../shared/store/teacher/stats/stats-by-user/stat-by-user.effect";
import {CheckPlanUNTEffect} from "../../shared/store/plan/checkPlanUNT/checkPlanUNT.effect";
import {
  GetMyAttemptUNTSettingsEffect
} from "../../shared/store/attemptSettings/getMyAttemptUNTSettings/getMyAttemptUNTSettings.effect";
import {
  GetMyAttemptSingleSettingsEffect
} from "../../shared/store/attemptSettings/getMyAttemptSingleSettings/getMyAttemptSingleSettings.effect";
import {GetActiveBattlesEffect} from "../../shared/store/battle/getActiveBattles/getActiveBattles.effect";
import {CreateBattleEffect} from "../../shared/store/battle/createBattle/createBattle.effect";
import {GetBattleByPromoEffect} from "../../shared/store/battle/getBattleByPromo/getBattleByPromo.effect";
import {GetBattleSubjectsEffect} from "../../shared/store/battle/getBattleSubjects/getBattleSubjects.effect";
import {GetBattleStepEffect} from "../../shared/store/battle/getBattleStep/getBattleStep.effect";
import {JoinToBattleEffect} from "../../shared/store/battle/joinToBattle/joinToBattle.effect";
import {AnswerBattleQuestionEffect} from "../../shared/store/battle/answerBattleQuestion/answerBattleQuestion.effect";
import {CreateBattleStepEffect} from "../../shared/store/battle/createBattleStep/createBattleStep.effect";
import {FinishBattleResultEffect} from "../../shared/store/battle/finishBattleResult/finishBattleResult.effect";
import {MyActiveBattlesEffect} from "../../shared/store/battle/myActiveBattles/myActiveBattles.effect";
import {PayCreateEffect} from "../../shared/store/paybox/pay_create/payCreate.effect";
import {GetCareerQuizzesEffect} from "../../shared/store/career/getCareerQuizzes/getCareerQuizzes.effect";
import {GetCareerQuizEffect} from "../../shared/store/career/getCareerQuiz/getCareerQuiz.effect";
import {PassCareerQuizEffect} from "../../shared/store/career/passCareerQuiz/passCareerQuiz.effect";
import {FinishCareerQuizEffect} from "../../shared/store/career/finishCareerQuiz/finishCareerQuiz.effect";
import {ResultCareerQuizEffect} from "../../shared/store/career/resultCareerQuiz/resultCareerQuiz.effect";
import {WalletRatingEffect} from "../../shared/store/wallet/walletRating/walletRating.effect";
import {MyOrderEffect} from "../../shared/store/paybox/my_orders/myOrder.effect";
import {
  GetCareerQuizGroupListEffect
} from "../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.effect";
import {MyCareerAttemptsEffect} from "../../shared/store/career/myCareerAttempts/myCareerAttempts.effect";
import {PayCareerEffect} from "../../shared/store/career/payCareer/payCareer.effect";
import {UserCheckEffect} from "../../shared/store/auth/userCheck/userCheck.effect";
import {GetMainVideosEffect} from "../../shared/store/iutube/getMainVideos/getMainVideos.effect";
import {GetAllVideosEffect} from "../../shared/store/iutube/getAllVideos/getAllVideos.effect";
import {GetVideoAuthorDetailEffect} from "../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.effect";
import {GetVideoDetailEffect} from "../../shared/store/iutube/getVideoDetail/getVideoDetail.effect";
import {VerifyEmailEffect} from "../../shared/store/auth/verifyEmail/verifyEmail.effect";

export const EffectsConstants = [
    LoginEffect,
    RegisterEffect,
    VerifyEmailEffect,
    ResetEffect,
    AccountEffect,
    SubjectEffect,
    CategoryEffect,
    SubCategoryEffect,
    GetAttemptEffect,
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
    SubStepExamEffect,
    PassSubStepExamEffect,
    ResultExamEffect,
    GetStatEffect,
    FinishAttemptEffect,
    AllAttemptEffect,
    GetUntStatEffect,
    GetAllTournamentEffect,
    GetTournamentDetailEffect,
    ParticipateTournamentEffect,
    GetSubTournamentDetailEffect,
    SubStepResultEffect,
    GetSubTournamentParticipantsEffect,
    GetSubTournamentResultsEffect,
    CreateTournamentAttemptEffect,
    GetSubTournamentWinnersEffect,
    GetSubTournamentRivalsEffect,
    SidenavEffects,
    ResultByAttemptIdEffect,
    StatByAttemptIdEffect,
    StatBySubjectIdEffect,
    GetUntPlanEffect,
    GetLearningPlanEffect,
    CreateForumEffect,
    AllForumEffect,
    GetForumEffect,
    GetForumDiscussEffect,
    ClassroomsGroupEffect,
    RoomsEffect,
    RatingForumEffect,
    CreateDiscussEffect,
    DetailClassroomEffect,
    GetAttemptByPromoCodeEffect,
    CreateAttemptSettingsEffect,
    CreateAttemptSettingsUNTEffect,
    GetAllAttemptSettingsEffect,
    GetAllAttemptSettingsUNTEffect,
    GetCategoryQuestionCountEffect,
    GetSubCategoryQuestionCountEffect,
    GetMySubjectsEffect,
    WalletIndexEffect,
    WalletRatingEffect,
    WalletTransferEffect,
    MyBalanceEffect,
    FindUserByEmailEffect,
    MyWalletEffect,
    WalletStatisticsEffect,
    GetImportantNewsEffect,
    AllNewsEffect,
    GetSingleNewsEffect,
    ExamsEffect,
    CheckNotificationEffect,
    GetNotificationAllEffect,
    GetUnreadMessageCountEffect,
    MyNotificationIdsEffect,
    GetAllAnnouncementsEffect,
    GetArraySettingsUNTEffect,
    GetNotificationTypeAllEffect,
    DetailExamEffect,
    StatByAttemptEffect,
    GetTechSupportTypesEffect,
    GetTechSupportCategoriesEffect,
    GetMyTechSupportTicketsEffect,
    GetTechSupportTicketDetailEffect,
    CreateTechSupportTicketEffect,
    CreateTechSupportMessageEffect,
    CloseTechSupportTicketEffect,
    StatByAttemptEffect,
    TeacherDashboardEffect,
    FactEffect,
    FullStatEffect,
    AllAttemptTypesEffect,
    GetMySavedQuestionsEffect,
    GetMyAppealQuestionsEffect,
    GetMySavedQuestionByIdEffect,
    GetMyAppealQuestionByIdEffect,
    FactEffect,
    StatBySubjectEffect,
    StatByUntEffect,
    MyStudentsEffect,
    StatByUserEffect,
    CheckPlanUNTEffect,
    GetMyAttemptSingleSettingsEffect,
    GetMyAttemptUNTSettingsEffect,
    GetActiveBattlesEffect,
    CreateBattleEffect,
    CreateBattleStepEffect,
    GetBattleByPromoEffect,
    GetBattleSubjectsEffect,
    GetBattleStepEffect,
    JoinToBattleEffect,
    AnswerBattleQuestionEffect,
    FinishBattleResultEffect,
    MyActiveBattlesEffect,
    PayCreateEffect,
    MyOrderEffect,
    GetCareerQuizzesEffect,
    GetCareerQuizEffect,
    PassCareerQuizEffect,
    FinishCareerQuizEffect,
    ResultCareerQuizEffect,
    GetCareerQuizGroupListEffect,
    MyCareerAttemptsEffect,
    PayCareerEffect,
    UserCheckEffect,
    GetMainVideosEffect,
    GetAllVideosEffect,
    GetVideoAuthorDetailEffect,
    GetVideoDetailEffect,
]
