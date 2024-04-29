import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {faChevronLeft, faChevronRight, faEye} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {CalendarView,} from 'angular-calendar';
import * as moment from "moment/moment";
import {Pagination} from "../../shared/store/pagination";
import {AttemptModel} from "../../shared/models/attempt";
import {UntStatModel} from "../../shared/models/untStat.model";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {surveyAnswerAction, surveyGetAction} from "../../shared/store/survey/survey.action";
import {answerSurveysStateSelector, getSurveysState} from "../../shared/store/survey/survey.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {SurveyModel, SurveyQuestionModel} from "../../shared/models/survey.model";
import {NgxSmartModalService} from "ngx-smart-modal";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SurveyRequest} from "../../shared/store/survey/survey.request";
import Swal from "sweetalert2";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  public _store = inject(Store);
  public translate = inject(GlobalTranslateService);
  protected readonly ColorConstants = ColorConstants;
  view: CalendarView = CalendarView.Month;
  dialog = inject(NgxSmartModalService)
  CalendarView = CalendarView;
  //@ts-ignore
  public attempts:Pagination<AttemptModel[]>;
  //@ts-ignore
  public untStat: UntStatModel;
  public pagination = {page:1};
  public surveyID: number | null = null
  viewDate: Date = new Date();
  public surveyQuestions: SurveyQuestionModel[] | null = null
  private formBuilder = inject(FormBuilder)
  //@ts-ignore
  public surveyForm: FormGroup;
  ngOnInit(): void {
    this.getSurveys()
    this.initSurveyForm()
  }
  getSurveys() {
    this._store.dispatch(surveyGetAction({locale_id: StrHelper.getLocaleIdByCurrentLang(this.translate.currentLang)}))
    this._store.select(getSurveysState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.surveyID = item.data.id
        this.surveyQuestions = item.data.survey_questions
        if (this.surveyQuestions.length) {
          this.populateSurveyForm();
          this.dialog.getModal('survey').open()
        }
      }
    })
  }

  checkIsWish(question: SurveyQuestionModel) {
    return ![question.answer_a, question.answer_b, question.answer_c, question.answer_d, question.answer_e, question.answer_f].some(answer => answer !== null);
  }
  initSurveyForm() {
    this.surveyForm = this.formBuilder.group({
      survey_id: null,
      questions: this.formBuilder.array([])
    });

  }

  // Геттер для удобства доступа к контролу questions
  get questions() {
    return this.surveyForm.get('questions') as FormArray;
  }

  populateSurveyForm() {
    const questionsArray = this.surveyForm.get('questions') as FormArray;
    if (this.surveyQuestions) {
      this.surveyQuestions.forEach((question: SurveyQuestionModel) => {
        questionsArray.push(this.formBuilder.group({
          survey_question_id: [question.id],
          answer: !this.checkIsWish(question) ? 'answer_a' : null, // Создаем обязательное поле для ответа
          wishes: null
        }));
      });
    }
  }
  answerSurvey() {
    this.surveyForm.patchValue({
      survey_id: this.surveyID
    })
    let req = this.surveyForm.getRawValue() as SurveyRequest
    this._store.dispatch(surveyAnswerAction({req: req}))
    this._store.select(answerSurveysStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        Swal.fire({
          title: "Ура!",
          text: "За ваш отзыв! Вам было начислено подарочных 1000 iU-coins!",
          icon: "success"
        })
        this.dialog.closeLatestModal()
      }
    })
  }
  public menuLists = [
    {
      title: 'STEP_MENU',
      path: StrHelper.getDashboardRouteName(RoutesName.stepRoute),
      imageUrl: "assets/images/icons/1.png"
    },
    {
      title: 'TRAINING_MENU',
      path: RoutesName.untMode,
      imageUrl: "assets/images/icons/2.png"
    },
    {
      title: 'TOURNAMENT_MENU',
      path: RoutesName.tournamentList,
      imageUrl: "assets/images/icons/3.png"
    },
    {
      title: 'UNT_BATTLE_MENU',
      path: RoutesName.battleList,
      imageUrl: "assets/images/icons/4.png"
    },
    {
      title: 'WALLET_MENU',
      path: RoutesName.walletIndex,
      imageUrl: "assets/images/icons/5.png"
    },
    {
      title: 'CAREER_MENU',
      path: RoutesName.careerQuizList,
      imageUrl: "assets/images/icons/6.png"
    },
    {
      title: 'FORUM_MENU',
      path: RoutesName.forumList,
      imageUrl: "assets/images/icons/8.png"
    },
    {
      title: 'SUPPORT_MENU',
      path: RoutesName.myTickets,
      imageUrl: "assets/images/icons/7.png"
    },
  ]
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faEye = faEye;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
