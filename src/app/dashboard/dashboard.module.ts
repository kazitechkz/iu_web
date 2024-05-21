import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../shared/shared.module";
import {IndexComponent} from './index/index.component';
import { StepComponent } from './step/step.component';
import { PassUntComponent } from './unt/pass-unt/pass-unt.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {Select2Module} from "ng-select2-component";
import {UiSwitchModule} from "ngx-ui-switch";
import { PassUntExamComponent } from './unt/pass-unt-exam/pass-unt-exam.component';
import {CountdownComponent, CountdownModule} from "ngx-countdown";
import { StepDetailComponent } from './step/step-detail/step-detail.component';
import {MarkdownModule} from "ngx-markdown";
import {NgxSmartModalModule} from "ngx-smart-modal";
import { SubStepComponent } from './step/sub-step/sub-step.component';
import { SingleSubjectComponent } from './unt/single-subject/single-subject.component';
import {CoreModule} from "../core/core.module";
import {YouTubePlayerModule} from "@angular/youtube-player";
import { ExamComponent } from './step/exam/exam.component';
import { UntModeComponent } from './unt/unt-mode/unt-mode.component';
import { UntResultComponent } from './unt/unt-result/unt-result.component';
import { ResultExamComponent } from './step/result-exam/result-exam.component';
import { UntStatComponent } from './unt/unt-stat/unt-stat.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgChartsModule} from "ng2-charts";
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { SubTournamentDetailComponent } from './tournament/sub-tournament-detail/sub-tournament-detail.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { ResultByAttemptIdComponent } from './stat/result-by-attempt-id/result-by-attempt-id.component';
import { StatByAttemptIdComponent } from './stat/stat-by-attempt-id/stat-by-attempt-id.component';
import { StatBySubjectIdComponent } from './stat/stat-by-subject-id/stat-by-subject-id.component';
import { UntPlanComponent } from './plan/unt-plan/unt-plan.component';
import {MathJaxPipe} from "../core/pipes/mathJax.pipe";
import { ContentPlanComponent } from './plan/content-plan/content-plan.component';
import { CreateForumComponent } from './forum/create-forum/create-forum.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {TwButtonModule, TwOptionModule, TwSelectModule} from "ng-tw";
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import { RoomComponent } from './room/room.component';
import {TranslatePipe} from "@ngx-translate/core";
import { CustomizableUntComponent } from './unt/customizable-unt/customizable-unt.component';
import { WalletIndexComponent } from './wallet/wallet-index/wallet-index.component';
import { WalletTransferComponent } from './wallet/wallet-transfer/wallet-transfer.component';
import { WalletDepositComponent } from './wallet/wallet-deposit/wallet-deposit.component';
import {QRCodeModule} from "angularx-qrcode";
import { WalletStatisticsComponent } from './wallet/wallet-statistics/wallet-statistics.component';
import {DpDatePickerModule} from "ng2-date-picker";
import {MathjaxModule} from "mathjax-angular";
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import {CalendarCommonModule, CalendarDayModule, CalendarMonthModule} from "angular-calendar";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { PassUntByPromoComponent } from './unt/pass-unt-by-promo/pass-unt-by-promo.component';
import { MyTicketsComponent } from './techSupport/my-tickets/my-tickets.component';
import { CreateTicketComponent } from './techSupport/create-ticket/create-ticket.component';
import { TicketDetailComponent } from './techSupport/ticket-detail/ticket-detail.component';
import { ShopIndexComponent } from './shop/shop-index/shop-index.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { PlanModeComponent } from './plan/plan-mode/plan-mode.component';
import { StatFullComponent } from './stat/stat-full/stat-full.component';
import { MyQuestionsComponent } from './question/my-questions/my-questions.component';
import { SavedQuestionComponent } from './question/saved-question/saved-question.component';
import { AppealQuestionComponent } from './question/appeal-question/appeal-question.component';
import { MyAttemptSettingsComponent } from './attemptSettings/my-attempt-settings/my-attempt-settings.component';
import { BattleListComponent } from './battle/battle-list/battle-list.component';
import { BattleDetailComponent } from './battle/battle-detail/battle-detail.component';
import { BattleGameComponent } from './battle/battle-game/battle-game.component';
import { CareerQuizListsComponent } from './career/career-quiz-lists/career-quiz-lists.component';
import { CareerQuizDetailComponent } from './career/career-quiz-detail/career-quiz-detail.component';
import { PassCareerQuizComponent } from './career/pass-career-quiz/pass-career-quiz.component';
import { ResultCareerQuizComponent } from './career/result-career-quiz/result-career-quiz.component';
import {DndDraggableDirective, DndDropzoneDirective} from "ngx-drag-drop";
import { WalletRatingComponent } from './wallet/wallet-rating/wallet-rating.component';
import { CareerPlanComponent } from './career/career-plan/career-plan.component';
import { MyCareerQuizAttemptsComponent } from './career/my-career-quiz-attempts/my-career-quiz-attempts.component';
import { IutubeListComponent } from './iutube/iutube-list/iutube-list.component';
import { IutubeDetailComponent } from './iutube/iutube-detail/iutube-detail.component';
import { IutubeVideosComponent } from './iutube/iutube-videos/iutube-videos.component';
import { IutubeAuthorsComponent } from './iutube/iutube-authors/iutube-authors.component';
import {InputMaskModule} from "@ngneat/input-mask";
import { BattleQuestionsComponent } from './battle/battle-questions/battle-questions.component';
import { BattleStatsComponent } from './battle/battle-stats/battle-stats.component';
import { GamesComponent } from './games/games.component';
import { TournamentAllComponent } from './tournament/tournament-all/tournament-all.component';
import { CashComponent } from './cash/cash.component';
import {CashHistoryComponent} from "./cash/cash-history/cash-history.component";
import { Test2024Component } from './test2024/test2024.component';


@NgModule({
    declarations: [
        LayoutComponent,
        IndexComponent,
        PassUntComponent,
        IndexComponent,
        StepComponent,
        PassUntExamComponent,
        StepComponent,
        StepDetailComponent,
        SubStepComponent,
        SingleSubjectComponent,
        ExamComponent,
        UntModeComponent,
        UntResultComponent,
        ResultExamComponent,
        UntStatComponent,
        TournamentListComponent,
        TournamentDetailComponent,
        SubTournamentDetailComponent,
        MyProfileComponent,
        ResultByAttemptIdComponent,
        StatByAttemptIdComponent,
        StatBySubjectIdComponent,
        UntPlanComponent,
        ContentPlanComponent,
        CreateForumComponent,
        ForumListComponent,
        ForumDetailComponent,
        RoomComponent,
        CustomizableUntComponent,
        WalletIndexComponent,
        WalletTransferComponent,
        WalletDepositComponent,
        WalletStatisticsComponent,
        NewsListComponent,
        NewsDetailComponent,
        NotificationListComponent,
        PassUntByPromoComponent,
        MyTicketsComponent,
        CreateTicketComponent,
        TicketDetailComponent,
        ShopIndexComponent,
        PlanModeComponent,
        StatFullComponent,
        MyQuestionsComponent,
        SavedQuestionComponent,
        AppealQuestionComponent,
        MyAttemptSettingsComponent,
        BattleListComponent,
        BattleDetailComponent,
        BattleGameComponent,
        CareerQuizListsComponent,
        CareerQuizDetailComponent,
        PassCareerQuizComponent,
        ResultCareerQuizComponent,
        WalletRatingComponent,
        CareerPlanComponent,
        MyCareerQuizAttemptsComponent,
        IutubeListComponent,
        IutubeDetailComponent,
        IutubeVideosComponent,
        IutubeAuthorsComponent,
        BattleQuestionsComponent,
        BattleStatsComponent,
        TournamentAllComponent,
        GamesComponent,
        CashComponent,
        CashHistoryComponent,
        Test2024Component,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FontAwesomeModule,
        SlickCarouselModule,
        Select2Module,
        UiSwitchModule,
        CountdownComponent,
        MarkdownModule,
        NgxSmartModalModule,
        CoreModule,
        YouTubePlayerModule,
        NgxPaginationModule,
        NgChartsModule,
        CountdownModule,
        CKEditorModule,
        TwOptionModule,
        TwSelectModule,
        TwButtonModule,
        QRCodeModule,
        DpDatePickerModule,
      MathjaxModule.forRoot(/*Optional Config*/),
        CalendarDayModule,
        CalendarMonthModule,
        CalendarCommonModule,
        SweetAlert2Module.forRoot(),
        NgOptimizedImage,
        CarouselModule,
        DndDraggableDirective,
        DndDropzoneDirective,
        InputMaskModule,

    ],
  providers: [MathJaxPipe, TranslatePipe]
})
export class DashboardModule {
}
