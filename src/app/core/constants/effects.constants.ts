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
import {
  CreateAttemptSettingsUNTEffect
} from "../../shared/store/attemptSettings/createAttemptSettingsUNT/createAttemptSettingsUNT.effect";

export const EffectsConstants = [
    LoginEffect,
    RegisterEffect,
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
    GetCategoryQuestionCountEffect,
    GetSubCategoryQuestionCountEffect,
    GetMySubjectsEffect,
    WalletIndexEffect,
    WalletTransferEffect,
    MyBalanceEffect,
    FindUserByEmailEffect,
    MyWalletEffect,
    WalletStatisticsEffect,
    GetImportantNewsEffect,
    AllNewsEffect,
    GetSingleNewsEffect,
]
