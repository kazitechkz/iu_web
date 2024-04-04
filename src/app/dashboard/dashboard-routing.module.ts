import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {IndexComponent} from "./index/index.component";
import {authGuard} from "../core/guards/auth.guard";
import {StepComponent} from "./step/step.component";
import {PassUntComponent} from "./unt/pass-unt/pass-unt.component";
import {PassUntExamComponent} from "./unt/pass-unt-exam/pass-unt-exam.component";
import {StepDetailComponent} from "./step/step-detail/step-detail.component";
import {SubStepComponent} from "./step/sub-step/sub-step.component";
import {SingleSubjectComponent} from "./unt/single-subject/single-subject.component";
import {ExamComponent} from "./step/exam/exam.component";
import {UntModeComponent} from "./unt/unt-mode/unt-mode.component";
import {UntResultComponent} from "./unt/unt-result/unt-result.component";
import {ResultExamComponent} from "./step/result-exam/result-exam.component";
import {UntStatComponent} from "./unt/unt-stat/unt-stat.component";
import {TournamentListComponent} from "./tournament/tournament-list/tournament-list.component";
import {TournamentDetailComponent} from "./tournament/tournament-detail/tournament-detail.component";
import {SubTournamentDetailComponent} from "./tournament/sub-tournament-detail/sub-tournament-detail.component";
import {MyProfileComponent} from "./profile/my-profile/my-profile.component";
import {ResultByAttemptIdComponent} from "./stat/result-by-attempt-id/result-by-attempt-id.component";
import {StatByAttemptIdComponent} from "./stat/stat-by-attempt-id/stat-by-attempt-id.component";
import {StatBySubjectIdComponent} from "./stat/stat-by-subject-id/stat-by-subject-id.component";
import {UntPlanComponent} from "./plan/unt-plan/unt-plan.component";
import {ContentPlanComponent} from "./plan/content-plan/content-plan.component";
import {CreateForumComponent} from "./forum/create-forum/create-forum.component";
import {studentGuard} from "../core/guards/student.guard";
import {ForumListComponent} from "./forum/forum-list/forum-list.component";
import {ForumDetailComponent} from "./forum/forum-detail/forum-detail.component";
import {RoomComponent} from "./room/room.component";
import {CustomizableUntComponent} from "./unt/customizable-unt/customizable-unt.component";
import {WalletIndexComponent} from "./wallet/wallet-index/wallet-index.component";
import {WalletTransferComponent} from "./wallet/wallet-transfer/wallet-transfer.component";
import {WalletDepositComponent} from "./wallet/wallet-deposit/wallet-deposit.component";
import {WalletStatisticsComponent} from "./wallet/wallet-statistics/wallet-statistics.component";
import {NewsListComponent} from "./news/news-list/news-list.component";
import {NewsDetailComponent} from "./news/news-detail/news-detail.component";
import {NotificationListComponent} from "./notification/notification-list/notification-list.component";
import {PassUntByPromoComponent} from "./unt/pass-unt-by-promo/pass-unt-by-promo.component";
import {MyTicketsComponent} from "./techSupport/my-tickets/my-tickets.component";
import {CreateTicketComponent} from "./techSupport/create-ticket/create-ticket.component";
import {TicketDetailComponent} from "./techSupport/ticket-detail/ticket-detail.component";
import {ShopIndexComponent} from "./shop/shop-index/shop-index.component";
import {PlanModeComponent} from "./plan/plan-mode/plan-mode.component";
import {StatFullComponent} from "./stat/stat-full/stat-full.component";
import {MyQuestionsComponent} from "./question/my-questions/my-questions.component";
import {SavedQuestionComponent} from "./question/saved-question/saved-question.component";
import {AppealQuestionComponent} from "./question/appeal-question/appeal-question.component";
import {MyAttemptSettingsComponent} from "./attemptSettings/my-attempt-settings/my-attempt-settings.component";
import {BattleListComponent} from "./battle/battle-list/battle-list.component";
import {BattleDetailComponent} from "./battle/battle-detail/battle-detail.component";
import {BattleGameComponent} from "./battle/battle-game/battle-game.component";
import {CareerQuizListsComponent} from "./career/career-quiz-lists/career-quiz-lists.component";
import {CareerQuizDetailComponent} from "./career/career-quiz-detail/career-quiz-detail.component";
import {PassCareerQuizComponent} from "./career/pass-career-quiz/pass-career-quiz.component";
import {ResultCareerQuizComponent} from "./career/result-career-quiz/result-career-quiz.component";
import {WalletRatingComponent} from "./wallet/wallet-rating/wallet-rating.component";
import {CareerPlanComponent} from "./career/career-plan/career-plan.component";
import {MyCareerQuizAttemptsComponent} from "./career/my-career-quiz-attempts/my-career-quiz-attempts.component";
import {IutubeListComponent} from "./iutube/iutube-list/iutube-list.component";
import {IutubeVideosComponent} from "./iutube/iutube-videos/iutube-videos.component";
import {IutubeDetailComponent} from "./iutube/iutube-detail/iutube-detail.component";
import {IutubeAuthorsComponent} from "./iutube/iutube-authors/iutube-authors.component";
import {BattleQuestionsComponent} from "./battle/battle-questions/battle-questions.component";
import {BattleStatsComponent} from "./battle/battle-stats/battle-stats.component";
import {GamesComponent} from "./games/games.component";
import {TournamentAllComponent} from "./tournament/tournament-all/tournament-all.component";
import {NgxSeo} from "@avivharuzi/ngx-seo";
import {SeoConstants} from "../core/constants/seo.constants";




const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard, studentGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent,
        data:{seo:SeoConstants.DashboardSEO}
      },
      {
        path: 'pass-unt',
        component: PassUntComponent,
        data:{seo:SeoConstants.PassUNTSEO}
      },
      {
        path: 'unt-mode',
        component: UntModeComponent,
        data:{seo:SeoConstants.ModeUNTSEO}
      },
      {
        path: 'single-subject-unt',
        component: SingleSubjectComponent,
        data:{seo:SeoConstants.SingleSubjectUNTSEO}
      },
      {
        path: 'customizable-unt',
        component: CustomizableUntComponent,
        data:{seo:SeoConstants.CustomizableUntSEO}
      },
      {
        path: 'pass-unt-exam/:id',
        component: PassUntExamComponent,
        data:{seo:SeoConstants.PassUNTSEO}
      },
      {
        path: 'unt-result/:id',
        component: UntResultComponent,
        data:{seo:SeoConstants.PassUNTSEO}
      },
      {
        path: 'unt-statistics',
        component: UntStatComponent,
        data:{seo:SeoConstants.UntStatSEO}
      },
      {
        path: 'tournament-list',
        component: TournamentListComponent,
        data:{seo:SeoConstants.TournamentsSEO}
      },
      {
        path: 'tournament-all',
        component: TournamentAllComponent,
        data:{seo:SeoConstants.TournamentsSEO}
      },
      {
        path: 'battle-list',
        component: BattleListComponent,
        data:{seo:SeoConstants.BattleListSEO}
      },
      {
        path: 'battle-detail/:promo_code',
        component: BattleDetailComponent,
        data:{seo:SeoConstants.BattleDetailSEO}
      },
      {
        path: 'battle-questions/:promo_code',
        component: BattleQuestionsComponent,
        data:{seo:SeoConstants.BattleQuestionSEO}
      },
      {
        path: 'battle-game/:step_id',
        component: BattleGameComponent,
        data:{seo:SeoConstants.BattleDetailSEO}
      },
      {
        path: 'battle-stats',
        component: BattleStatsComponent,
        data:{seo:SeoConstants.BattleStatSEO}
      },
      {
        path: 'tournament-detail/:id',
        component: TournamentDetailComponent,
        data:{seo:SeoConstants.TournamentDetailSEO}
      },
      {
        path: 'sub-tournament-detail/:id',
        component: SubTournamentDetailComponent,
        data:{seo:SeoConstants.TournamentDetailSEO}
      },
      {
        path: 'step',
        component: StepComponent,
        data:{seo:SeoConstants.StepSEO}
      },
      {
        path: 'step/:id',
        component: StepDetailComponent,
        data:{seo:SeoConstants.SubStepSEO}
      },
      {
        path: 'sub-step/:id/:locale_id',
        component: SubStepComponent,
        data:{seo:SeoConstants.SubStepSEO}
      },
      {
        path: 'sub-step-exam/:sub_step_test_id/:locale_id',
        component: ExamComponent,
        data:{seo:SeoConstants.StepExamSEO}
      },
      {
        path: 'result-exam/:sub_step_id/:locale_id',
        component: ResultExamComponent,
        data:{seo:SeoConstants.ResultExamSEO}
      },
      {
        path: 'result-attempt/:id',
        component: ResultByAttemptIdComponent,
        data:{seo:SeoConstants.ResultExamSEO}
      },
      {
        path: 'stat-attempt/:id',
        component: StatByAttemptIdComponent,
        data:{seo:SeoConstants.ResultAttemptSEO}
      },
      {
        path: 'plan-mode',
        component: PlanModeComponent,
        data:{seo:SeoConstants.PlanSEO}
      },
      {
        path: 'plan-unt',
        component: UntPlanComponent,
        data:{seo:SeoConstants.PlanSEO}
      },
      {
        path: 'plan-content',
        component: ContentPlanComponent,
        data:{seo:SeoConstants.PlanSEO}
      },
      {
        path: 'pass-unt-by-promo/:promo_code',
        component: PassUntByPromoComponent,
        data:{seo:SeoConstants.PassUNTByPromoSEO}
      },
      {
        path: 'stat-subject/:id',
        component: StatBySubjectIdComponent,
        data:{seo:SeoConstants.StatBySubjectIdSEO}
      },
      {
        path: 'stat-full',
        component: StatFullComponent,
        data:{seo:SeoConstants.StatFullUNTSeo}
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        data:{seo:SeoConstants.ProfileSeo}
      },
      {
        path: 'create-forum',
        component: CreateForumComponent,
        data:{seo:SeoConstants.CreateForumSeo}
      },
      {
        path: 'forum-list',
        component: ForumListComponent,
        data:{seo:SeoConstants.ForumListSeo}
      },
      {
        path: 'forum-detail/:id',
        component: ForumDetailComponent,
        data:{seo:SeoConstants.ForumDetailSeo}
      },
      {
        path: 'wallet',
        component: WalletIndexComponent,
        data:{seo:SeoConstants.WalletSeo}
      },
      {
        path: 'wallet-transfer',
        component: WalletTransferComponent,
        data:{seo:SeoConstants.WalletTransferSeo}
      },
      {
        path: 'wallet-deposit',
        component: WalletDepositComponent,
        data:{seo:SeoConstants.WalletDepositSeo}
      },
      {
        path: 'wallet-statistics',
        component: WalletStatisticsComponent,
        data:{seo:SeoConstants.WalletStatisticsSeo}
      },
      {
        path: 'wallet-rating',
        component: WalletRatingComponent,
        data:{seo:SeoConstants.WalletRatingSeo}
      },
      {
        path: 'news',
        component: NewsListComponent,
        data:{seo:SeoConstants.NewsSeo}
      },
      {
        path: 'news-detail/:id',
        component: NewsDetailComponent,
        data:{seo:SeoConstants.NewsDetailSeo}
      },
      {
        path: 'notifications',
        component: NotificationListComponent,
        data:{seo:SeoConstants.NotificationSeo}
      },
      {
        path: 'classrooms',
        component: RoomComponent,
        data:{seo:SeoConstants.ClassRoomSeo}
      },
      {
        path: 'career-quizzes',
        component: CareerQuizListsComponent,
        data:{seo:SeoConstants.CareerQuizSeo}
      },
      {
        path: 'career-quiz-detail/:id',
        component: CareerQuizDetailComponent,
        data:{seo:SeoConstants.CareerQuizDetailSeo}
      },
      {
        path: 'pass-career-quiz/:id',
        component: PassCareerQuizComponent,
        data:{seo:SeoConstants.PassCareerQuizSeo}
      },
      {
        path: 'result-career-quiz/:id',
        component: ResultCareerQuizComponent,
        data:{seo:SeoConstants.ResultCareerQuizSeo}
      },
      {
        path: 'career-quiz-plans',
        component: CareerPlanComponent,
        data:{seo:SeoConstants.CareerPlanSeo}
      },
      {
        path: 'my-career-quiz-attempts',
        component: MyCareerQuizAttemptsComponent,
        data:{seo:SeoConstants.MyCareerQuizAttemptsSeo}
      },
      {
        path: 'iutube',
        component: IutubeListComponent,
        data:{seo:SeoConstants.IUTubeSeo}
      },
      {
        path: 'iutube-single-video/:alias',
        component: IutubeDetailComponent,
        data:{seo:SeoConstants.IUTubeSeo}
      },
      {
        path: 'iutube-videos',
        component: IutubeVideosComponent,
        data:{seo:SeoConstants.IUTubeSeo}
      },
      {
        path: 'iutube-author/:id',
        component: IutubeAuthorsComponent,
        data:{seo:SeoConstants.IUTubeSeo}
      },
      {
        path: 'my-tickets',
        component: MyTicketsComponent,
        data:{seo:SeoConstants.MyTicketsSeo}
      },
      {
        path: 'my-questions',
        component: MyQuestionsComponent,
        data:{seo:SeoConstants.MyQuestionsSeo}
      },
      {
        path: 'my-attempt-settings',
        component: MyAttemptSettingsComponent
      },
      {
        path: 'saved-questions/:id',
        component: SavedQuestionComponent,
        data:{seo:SeoConstants.MyQuestionsSeo}
      },
      {
        path: 'appealed-questions/:id',
        component: AppealQuestionComponent,
        data:{seo:SeoConstants.MyQuestionsSeo}
      },
      {
        path: 'create-ticket',
        component: CreateTicketComponent,
        data:{seo:SeoConstants.CreateTicketSeo}
      },
      {
        path: 'ticket-detail/:id',
        component: TicketDetailComponent,
        data:{seo:SeoConstants.MyTicketsSeo}
      },
      {
        path: 'games',
        component: GamesComponent
      },
      {
        path:"no-page-ready",
        component:ShopIndexComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
