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
        path: 'sub-step/:id',
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
        path: 'my-tickets',
        component: MyTicketsComponent
      },
      {
        path: 'my-questions',
        component: MyQuestionsComponent
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
        path:"no-page-ready",
        component:ShopIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
