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
        path: 'plan-unt',
        component: UntPlanComponent
      },
      {
        path: 'plan-content',
        component: ContentPlanComponent
      },
      {
        path: 'stat-subject/:id',
        component: StatBySubjectIdComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'create-forum',
        component: CreateForumComponent,
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
