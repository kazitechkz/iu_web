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


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard, studentGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'pass-unt',
        component: PassUntComponent
      },
      {
        path: 'unt-mode',
        component: UntModeComponent
      },
      {
        path: 'single-subject-unt',
        component: SingleSubjectComponent
      },
      {
        path: 'customizable-unt',
        component: CustomizableUntComponent
      },
      {
        path: 'pass-unt-exam/:id',
        component: PassUntExamComponent
      },
      {
        path: 'unt-result/:id',
        component: UntResultComponent
      },
      {
        path: 'unt-statistics',
        component: UntStatComponent
      },
      {
        path: 'tournament-list',
        component: TournamentListComponent
      },
      {
        path: 'battle-list',
        component: BattleListComponent
      },
      {
        path: 'battle-detail/:promo_code',
        component: BattleDetailComponent
      },
      {
        path: 'battle-questions/:promo_code',
        component: BattleQuestionsComponent
      },
      {
        path: 'battle-game/:step_id',
        component: BattleGameComponent,
      },
      {
        path: 'battle-stats',
        component: BattleStatsComponent,
      },
      {
        path: 'tournament-detail/:id',
        component: TournamentDetailComponent
      },
      {
        path: 'sub-tournament-detail/:id',
        component: SubTournamentDetailComponent
      },
      {
        path: 'step',
        component: StepComponent
      },
      {
        path: 'step/:id',
        component: StepDetailComponent
      },
      {
        path: 'sub-step/:id/:locale_id',
        component: SubStepComponent
      },
      {
        path: 'sub-step-exam/:sub_step_test_id/:locale_id',
        component: ExamComponent
      },
      {
        path: 'result-exam/:sub_step_id/:locale_id',
        component: ResultExamComponent
      },
      {
        path: 'result-attempt/:id',
        component: ResultByAttemptIdComponent
      },
      {
        path: 'stat-attempt/:id',
        component: StatByAttemptIdComponent
      },
      {
        path: 'plan-mode',
        component: PlanModeComponent
      },
      {
        path: 'plan-unt',
        component: UntPlanComponent
      },
      {
        path: 'plan-content',
        component: ContentPlanComponent
      },
      {
        path: 'pass-unt-by-promo/:promo_code',
        component: PassUntByPromoComponent
      },
      {
        path: 'stat-subject/:id',
        component: StatBySubjectIdComponent
      },
      {
        path: 'stat-full',
        component: StatFullComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'create-forum',
        component: CreateForumComponent,
      },
      {
        path: 'forum-list',
        component: ForumListComponent,
      },
      {
        path: 'forum-detail/:id',
        component: ForumDetailComponent
      },
      {
        path: 'wallet',
        component: WalletIndexComponent
      },
      {
        path: 'wallet-transfer',
        component: WalletTransferComponent
      },
      {
        path: 'wallet-deposit',
        component: WalletDepositComponent
      },
      {
        path: 'wallet-statistics',
        component: WalletStatisticsComponent
      },
      {
        path: 'wallet-rating',
        component: WalletRatingComponent
      },
      {
        path: 'news',
        component: NewsListComponent
      },
      {
        path: 'news-detail/:id',
        component: NewsDetailComponent
      },
      {
        path: 'notifications',
        component: NotificationListComponent
      },
      {
        path: 'classrooms',
        component: RoomComponent
      },
      {
        path: 'career-quizzes',
        component: CareerQuizListsComponent
      },
      {
        path: 'career-quiz-detail/:id',
        component: CareerQuizDetailComponent
      },
      {
        path: 'pass-career-quiz/:id',
        component: PassCareerQuizComponent
      },
      {
        path: 'result-career-quiz/:id',
        component: ResultCareerQuizComponent
      },
      {
        path: 'career-quiz-plans',
        component: CareerPlanComponent
      },
      {
        path: 'my-career-quiz-attempts',
        component: MyCareerQuizAttemptsComponent
      },
      {
        path: 'iutube',
        component: IutubeListComponent
      },
      {
        path: 'iutube-single-video/:alias',
        component: IutubeDetailComponent
      },
      {
        path: 'iutube-videos',
        component: IutubeVideosComponent
      },
      {
        path: 'iutube-author/:id',
        component: IutubeAuthorsComponent
      },
      {
        path: 'my-tickets',
        component: MyTicketsComponent
      },
      {
        path: 'my-questions',
        component: MyQuestionsComponent
      },
      {
        path: 'my-attempt-settings',
        component: MyAttemptSettingsComponent
      },
      {
        path: 'saved-questions/:id',
        component: SavedQuestionComponent
      },
      {
        path: 'appealed-questions/:id',
        component: AppealQuestionComponent
      },
      {
        path: 'create-ticket',
        component: CreateTicketComponent
      },
      {
        path: 'ticket-detail/:id',
        component: TicketDetailComponent
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
