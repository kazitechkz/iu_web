import {Component, inject, Input} from '@angular/core';
import {driver} from "driver.js";
import {GlobalTranslateService} from "../../services/globalTranslate.service";

@Component({
  selector: 'app-information-bear',
  templateUrl: './information-bear.component.html',
  styleUrls: ['./information-bear.component.scss']
})
export class InformationBearComponent {
  @Input() pageName: string = "";


  driverObj: any = driver();
  public translate = inject(GlobalTranslateService);

  showTour() {
    this.driverObj = driver(this.driverPages[this.pageName + this.translate.currentLang]);
    this.driverObj.drive()
  }


  driverPages: { [key: string]: any; } = {
    "student_index_page_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#main-index-page',
          popover: {
            title: 'Добро пожаловать в iU test',
            description: 'Здесь ты найдешь все что необходимо для успешной сдачи ЕНТ.',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#main-index-services',
          popover: {
            title: 'Наши сервисы',
            description: 'У нас есть тренажеры ент, онлайн материалы для обучения и многое другое',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Удачного пути!',
            description: 'Надеемся что сервис для тебя окажется полезным!',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "student_index_page_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#main-index-page',
          popover: {
            title: 'iU test-ке Қош келдіңіз',
            description: 'Мұнда сіз ҰБТ-ны сәтті тапсыру үшін қажет нәрсенің бәрін таба аласыз.',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#main-index-services',
          popover: {
            title: 'Біздің қызметтер',
            description: 'Бізде ҰБТ тренажерлері, онлайн Оқу материалдары және т. б. бар',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Ақ жол!',
            description: 'Қызмет сізге пайдалы болады деп үміттенеміз!',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my-profile_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#profile-info-card',
          popover: {
            title: 'Карта профиля пользователя',
            description: 'Доступная информация о вашем профиле включая почту, телефон, email, статус.',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-card-pencil',
          popover: {
            title: 'Измените свои данные',
            description: 'Меняйте свою личные информацию одним нажатием кнопки',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-subscriptions',
          popover: {
            title: 'Мои подписки',
            description: 'Здесь вы можете увидить список активных подписок, которые вы приобрели',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-transactions',
          popover: {
            title: 'Мои транзакции',
            description: 'Список ваших финансовых операций также достуен',
            side: "right",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Раздел Профиль',
            description: 'Информативная панель будет иметь больше функциональных возможностей в будущем',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my-profile_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: ' #profile-info-card',
          popover: {
            title: 'Пайдаланушы профилінің картасы',
            description: 'Сіздің профиліңіз туралы қол жетімді ақпарат оның ішінде пошта, телефон, электрондық пошта, күй.',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-card-pencil',
          popover: {
            title: 'Деректеріңізді өзгертіңіз',
            description: 'Түймені басу арқылы жеке ақпаратыңызды өзгертіңіз',
            side: 'left',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-subscriptions',
          popover: {
            title: 'Менің жазылымдарым',
            description: ' Мұнда Сіз сатып алған белсенді жазылымдардың тізімін көре аласыз',
            side: 'left',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#profile-info-transactions',
          popover: {
            title: 'Менің транзакцияларым',
            description: ' Сіздің қаржылық операцияларыңыздың тізімі де қол жетімді',
            side: 'right',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профиль бөлімі',
            description: 'Ақпараттық тақта болашақта көбірек функционалдылыққа ие болады',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "step_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#step-cards',
          popover: {
            title: 'Карты обучений',
            description: 'Выбирайте дисциплину и начинайте учиться уже сегодня не выходя из дома.',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-steps',
          popover: {
            title: 'Этапы предмета',
            description: 'Мы поделили дисциплину на главы для более удобного обучения, учитесь шаг за шагом преодолевая самые главные темы',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-sub-steps',
          popover: {
            title: 'Разделы этапов подписки',
            description: 'Для более точного обучения мы поделили главы на более точечные разделы, чтобы укрепить все темы',
            side: "right",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-progress',
          popover: {
            title: 'Мой прогресс',
            description: 'Отслеживайте ваш прогресс и получайте призы и подарки',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Раздел обучения',
            description: 'Пусть раздел обучения будет легким и насыщенным',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "step_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#step-cards',
          popover: {
            title: ' Оқу карталары',
            description: 'Тәртіпті таңдап, бүгін үйден шықпай-ақ оқуды бастаңыз.',
            side: "top",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-steps',
          popover: {
            title: 'title кезеңдері',
            description: 'Біз тәртіпті ыңғайлы оқу үшін тарауларға бөлдік, ең маңызды тақырыптарды кезең-кезеңімен жеңе отырып үйреніңіз',
            side: 'left',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-sub-steps',
          popover: {
            title: 'Жазылым кезеңдерінің бөлімдері',
            description: 'Дәлірек оқыту үшін біз барлық тақырыптарды нығайту үшін тарауларды нүктелік бөлімдерге бөлдік',
            side: "right",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#step-cards-progress',
          popover: {
            title: 'Менің прогресім',
            description: 'үлгеріміңізді қадағалаңыз және сыйлықтар мен сыйлықтар алыңыз',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Оқу бөлімі',
            description: ' Оқу бөлімі жеңіл және қанық болсын',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "sub_step_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#sub_steps_all',
          popover: {
            title: 'Этапы обучения',
            description: 'Шаг за шагом осваивайте дисциплину',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_steps_detail',
          popover: {
            title: 'element этапа',
            description: 'Нажмите на этап обучения и вам откроются разделы, осваиваете шаг за шагом большие главы',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_fact',
          popover: {
            title: 'Факты дисциплины',
            description: 'Информационный раздел этапа поможет вам узнать интересный факт из материала',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_locale',
          popover: {
            title: 'Язык обучения',
            description: 'Переключайтесь между языками и обучайтесь на удобном вам языке',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_subjects',
          popover: {
            title: 'Выберите дисциплину',
            description: 'Выберите наиболее удобную для вас дисциплину и начните обучение',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Раздел этапов обучения',
            description: 'Обучайтесь в удобном для вас формате',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "sub_step_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#sub_steps_all',
          popover: {
            title: 'Оқу кезеңдері',
            description: 'Тәртіпті біртіндеп меңгеру',
            side: 'left',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_steps_detail',
          popover: {
            title: 'Кезең elementі',
            description: 'Оқу кезеңін нұқыңыз, сонда сіз бөлімдерді ашасыз, үлкен тарауларды біртіндеп игересіз',
            side: 'left',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_fact',
          popover: {
            title: 'Тәртіп фактілері',
            description: 'Кезеңнің ақпараттық бөлімі Сізге қызықты фактіні материалдан білуге көмектеседі',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_locale',
          popover: {
            title: 'Оқу тілі',
            description: 'Тілдер арасында ауысып, өзіңізге ыңғайлы тілде үйреніңіз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_subjects',
          popover: {
            title: 'Пәнді таңдаңыз',
            description: 'Сізге ыңғайлы пәнді таңдап, оқуды бастаңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Оқу кезеңдері бөлімі',
            description: 'Cізге ыңғайлы форматта оқы',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "sub_step_content_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#sub_step_content',
          popover: {
            title: 'Контент обучения',
            description: 'Учитесь и смотрите видеоролики от наших преподавателей',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_action',
          popover: {
            title: 'Действия обучения',
            description: 'Не забудьте закрепить ваш прогресс прохождением теста, просмотров результатов прошлого теста и пересдачей',
            side: "left",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Раздел контента обучения',
            description: 'Наши методологи постоянно обновляют материалы и контент',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "sub_step_content_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#sub_step_content',
          popover: {
            title: 'Оқу мазмұны',
            description: 'Біздің оқытушылардан бейнелерді үйреніңіз және көріңіз',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#sub_step_action',
          popover: {
            title: 'Оқу әрекеттері',
            description: ' Тест тапсыру, өткен тест нәтижелерін қарау және қайта тапсыру арқылы үлгеріміңізді бекітуді ұмытпаңыз',
            side: 'left',
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Оқу мазмұны бөлімі',
            description: 'Біздің әдіскерлер материалдар мен мазмұнды үнемі жаңартып отырады',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },

    "unt_mode_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#unt-full-mode',
          popover: {
            title: '5 предметов для сдачи',
            description: 'Вы можете сдать полноценное тестирование ЕНТ состоящий из 2 профильных и 3 обязательных предметов',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#unt-single-mode',
          popover: {
            title: '1 предмет',
            description: 'Выберите одну дисциплину и вам будет доступен полный тест по этой дисциплине',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#unt-custom-mode',
          popover: {
            title: 'Настрой под свой режим',
            description: 'Выбирайте дисциплину и тему, прокачивайте свои слабые темы вместе с нами!',
            side: "right",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Раздел тренажера',
            description: 'Сдавайте ЕНТ под свой темп и набирайте наивысший балл',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "unt_mode_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#unt-full-mode',
          popover: {
            title: 'Тапсыруға арналған 5 element',
            description: ' Сіз толық тестілеуді тапсыра аласыз ЕНТ 2 профильді және 3 міндетті elementтен тұрады',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#unt-single-mode',
          popover: {
            title: '1 пән',
            description: 'бір пәнді таңдаңыз және сізге осы пән бойынша толық тест қол жетімді болады',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#unt-custom-mode',
          popover: {
            title: 'өз режиміңді баптау',
            description: 'тәртіп пен titleты таңдаңыз, әлсіз titleтарыңызды бізбен бірге айдаңыз!',
            side: "right",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'тренажер бөлімі',
            description: 'өз қарқыныңызбен ұпай жинап, ең жоғары балл жинаңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "pass-unt_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#compusory_subject_card',
          popover: {
            title: '3 обязательных предметов для сдачи',
            description: 'При полноценном тестировании уже выбраны обязательные предметы',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'Профильные предметы',
            description: 'Выберите 2 профильных предмета и начните тестирование, выбрав язык, если же у вас нет подписки мы предоставляем 1 вариант абсолютно бесплатно',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Удачной сдачи',
            description: 'Мы старались разработать тренажер который приближает тебя к самой настоящей сдаче ЕНТ, мы всегда работаем над улучшением возможностей',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "pass-unt_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#compusory_subject_card',
          popover: {
            title: 'Тапсыруға міндетті 3 element',
            description: 'Толық тестілеу кезінде міндетті elementтер таңдалған',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'Профиль elementтері',
            description: '2 профиль elementтерін таңдап, Тілді таңдау арқылы тестілеуді бастаңыз, егер сізде жазылым болмаса, біз 1 нұсқаны мүлдем тегін береміз',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Cәтті тапсыру',
            description: 'Біз әзірлеуге тырыстық тренажер бұл сізді ең нақты ҰБТ тапсыруға жақындатады, біз әрқашан мүмкіндіктерді жақсарту үшін жұмыс істейміз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "single-subject-unt_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'Выберите один предмет',
            description: 'Выберите 1 предмет и начните тестирование, выбрав язык, если же у вас нет подписки мы предоставляем 1 вариант абсолютно бесплатно',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Удачной сдачи',
            description: 'Мы старались разработать тренажер который приближает тебя к самой настоящей сдаче ЕНТ, мы всегда работаем над улучшением возможностей',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "single-subject-unt_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'Бір elementті таңдаңыз',
            description: '1 elementті таңдап, Тілді таңдау арқылы тестілеуді бастаңыз, егер сізде жазылым болмаса, біз 1 опцияны мүлдем тегін береміз',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Cәтті тапсыру',
            description: 'Біз әзірлеуге тырыстық тренажер бұл сізді ең нақты ҰБТ тапсыруға жақындатады, біз әрқашан мүмкіндіктерді жақсарту үшін жұмыс істейміз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "customizable-unt_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#select_locale',
          popover: {
            title: 'Выберите предпочитаемый язык',
            description: 'Вы можете выбрать наиболее предпочтительный язык на котором будут загружены тесты',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'Выберите один предмет',
            description: 'Выберите 1 предмет, у вас загрузятся списки тем по данной дисциплине соберите себе необходимое количество вопросов, укажите время и начните тренировку слабых тем',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#select_settings',
          popover: {
            title: 'Настройте время сдачи',
            description: 'Настройте время ( минутах ) и количество вопросов, нажатием на карты тем дисциплины и выбором количества вопросов',
            side: "right",
            align: 'start',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Удачной сдачи',
            description: 'Мы старались разработать тренажер который способен тренировать твои самые слабые стороны и превращать их в самые сильные',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "customizable-unt_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#select_locale',
          popover: {
            title: 'қалаған тілді таңдаңыз',
            description: 'Сіз тесттер жүктелетін ең қолайлы тілді таңдай аласыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#selectable_subject_card',
          popover: {
            title: 'бір elementті таңдаңыз',
            description: '1 elementті таңдаңыз, сізде осы пән бойынша titleтар тізімі жүктеледі, өзіңізге қажетті сұрақтар санын жинаңыз, уақытты көрсетіңіз және әлсіз тақырыптарды жаттықтыруды бастаңыз',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#select_settings',
          popover: {
            title: 'тапсыру уақытын реттеңіз',
            description: 'уақыт (минут ) мен сұрақтар санын реттеңіз, пән titleтарының карталарын басып, сұрақтар санын таңдаңыз',
            side: "оң",
            align: 'start',
            popoverClass: 'iu-test- popover-class'
          }
        },
        {
          popover: {
            title: 'сәтті өзгеріс',
            description: 'Біз жасауға тырыстық тренажер ол сіздің әлсіз жақтарыңызды жаттықтыра алады және оларды ең мықтыға айналдырады',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "pass-unt-exam_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#time_card',
          popover: {
            title: 'Время тестирования',
            description: 'Таймер который указывает время до окончания тестирования, когда время ожидания окончится тест завершится автоматически',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_card',
          popover: {
            title: 'Выберите дисциплину',
            description: 'Вы можете переключаться между дисциплинами, просто нажмите на этот element',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_pagination',
          popover: {
            title: 'Выберите вопрос',
            description: 'Вы можете переключаться между вопросами, просто нажмите на этот element, также если вы ответили на вопрос он подсветиться темно-оранжевым цветом, если вы отметили вопрос, но не ответили он перекраститься в белый цвет',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_indicator',
          popover: {
            title: 'Индикаторы',
            description: 'Вы можете переключаться между следующей или предыдущей дисциплиной, просто нажмите на этот element, также вам доступно количество неотвеченных вопросов в данной дисциплине',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prompt_indicator',
          popover: {
            title: 'Помощники',
            description: 'Вы можете запросить подсказку для вопроса, пожаловаться на вопрос или сохранить его в закладках Мои Вопросы',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_card',
          popover: {
            title: 'Блок вопроса',
            description: 'Этот блок с вопросом, контекстом если он есть и вариантами ответов',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_answers',
          popover: {
            title: 'Варианты ответов',
            description: 'Нажав на вариант появляется возможность дать ответ и сохранить прогресс, вы можете также выбрать несколько ответов. Внимание! Отвеченные вопросы нельзя пересдать ( после нажатия кнопки Ответить )',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prev_answer_next',
          popover: {
            title: 'elementы управления',
            description: 'Переключайтесь между вопросами, при нажатии на вариант ответа у вас появиться возможность дать ответ и сохранить прогресс',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#end_settings',
          popover: {
            title: 'Досрочно завершить экзамен',
            description: 'Вы можете досрочно завершить тест, однако помните что тест завершится сам если вы ответите на все вопросы или время выйдет',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Удачной сдачи',
            description: 'Мы старались разработать тренажер который приближает тебя к самой настоящей сдаче ЕНТ, мы всегда работаем над улучшением возможностей',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "pass-unt-exam_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#time_card',
          popover: {
            title: 'тестілеу уақыты',
            description: 'Таймер бұл тестілеу аяқталғанға дейінгі уақытты көрсетеді, күту уақыты автоматты түрде аяқталады',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_card',
          popover: {
            title: 'пәнді таңдаңыз',
            description: 'сіз пәндер арасында ауыса аласыз, тек осы elementті нұқыңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_pagination',
          popover: {
            title: 'сұрақты таңдаңыз',
            description: 'Сіз сұрақтар арасында ауыса аласыз, тек осы elementті нұқыңыз, егер сіз сұраққа жауап берсеңіз ол қою қызғылт сары түспен жарықтандырылады, егер сіз сұрақты белгілеген болсаңыз, бірақ жауап бермеген болсаңыз, ол ақ түске айналады',
            side: " top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_indicator',
          popover: {
            title: 'Индикаторлар',
            description: 'сіз келесі немесе алдыңғы пән арасында ауыса аласыз, тек осы elementті нұқыңыз, сонымен қатар Сізге берілген пән бойынша жауап берілмеген сұрақтар саны қол жетімді',
            side: "left",
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prompt_indicator',
          popover: {
            title: 'көмекшілер',
            description: 'сіз сұрақты сұрай аласыз, сұраққа шағымдана аласыз немесе менің сұрақтарыма бетбелгі қоя аласыз',
            side: ' left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_card',
          popover: {
            title: 'сұрақ блогы',
            description: 'сұрақ, контекст және жауап нұсқалары бар бұл блок',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: ' #question_answers',
          popover: {
            title: ' жауап опциялары',
            description: 'опцияны басу арқылы жауап беру және прогресті сақтау мүмкіндігі пайда болады, сонымен қатар бірнеше жауапты таңдауға болады. Назар аударыңыз! Жауап берілген сұрақтарды қайта тапсыруға болмайды (жауап беру түймесін басқаннан кейін)',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prev_answer_next',
          popover: {
            title: 'басқару elementтері',
            description: 'сұрақтар арасында ауысыңыз, жауап опциясын басқан кезде сізде жауап беру және прогресті сақтау мүмкіндігі бар',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#end_settings',
          popover: {
            title: ' емтиханды мерзімінен бұрын аяқтау',
            description: ' Сіз тестті мерзімінен бұрын аяқтай аласыз, бірақ есіңізде болсын тест өзі аяқталады егер сіз барлық сұрақтарға жауап берсеңіз немесе уақыт шықса',
            side: ' left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Cәтті тапсыру',
            description: 'біз әзірлеуге тырыстық тренажер бұл сізді ең нақты ҰБТ тапсыруға жақындатады, біз әрқашан мүмкіндіктерді жақсарту үшін жұмыс істейміз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "result-attempt_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#main-info',
          popover: {
            title: 'Статистика',
            description: 'В данном блоке указаны тип сдачи, уникальный номер сдачи, время, количество баллов и многое другое',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_table',
          popover: {
            title: 'Статистика по предметам',
            description: 'В данной таблице указаны список сданных дисциплин и статистика по количеству верных и неверных ответов в т.ч. количества набранных баллов',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#management_tool',
          popover: {
            title: 'Статистика и Работа над ошибками',
            description: 'Просматривайте где именно вы допустили ошибки и темы на которых вы ошиблись',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'Смотри на результаты и подкрепляй слабые темы и учись на своих ошибках',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "result-attempt_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#main-info',
          popover: {
            title: 'Статистика',
            description: ' бұл блокта тапсыру түрі, бірегей тапсыру нөмірі, уақыты, ұпай саны және т. б.',
            side: ' bottom',
            align: 'center',
            popoverClass: 'iu-test- popover-class'
          }
        },
        {
          element: '#subject_table',
          popover: {
            title: 'пәндер бойынша Статистика',
            description: ' бұл кестеде берілген пәндердің тізімі және дұрыс және бұрыс жауаптар саны бойынша статистика, соның ішінде алынған ұпайлар саны',
            side: "bottom",
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#management_tool',
          popover: {
            title: 'Статистика және қателер бойынша жұмыс',
            description: 'қай жерде қателіктер жібергеніңізді және қателескен тақырыптарды дәл қараңыз',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'нәтижелерді қараңыз және әлсіз тақырыптарды күшейтіңіз және қателіктеріңізден сабақ алыңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "stat-attempt_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#attemptStat',
          popover: {
            title: 'Статистика',
            description: 'В данном блоке указаны дисциплины и темы ( с указанием глав) и возможностью пройти обучение по заданным темам',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'Смотри на результаты и подкрепляй слабые темы и учись на своих ошибках',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "stat-attempt_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#attemptStat',
          popover: {
            title: 'Статистика',
            description: 'бұл блокта пәндер мен titleтар ( тарауларды көрсете отырып) және берілген titleтар бойынша оқудан өту мүмкіндігі көрсетілген',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'нәтижелерді қараңыз және әлсіз тақырыптарды күшейтіңіз және қателіктеріңізден сабақ алыңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "stat-full_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#filterBlock',
          popover: {
            title: 'Фильтры',
            description: 'Выбирай только те результаты в которых ты заинтересован, в том числе тип сдачи, дисциплину и время сдачи',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#statsBlock',
          popover: {
            title: 'Общая статистика',
            description: 'Просматривай статистику в том числе средний балл, наименьший и наибольший балл, кол-во сдач и кол-во пройденных вопросов',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#categoryStatsBlock',
          popover: {
            title: 'Статистика дисциплины',
            description: 'Просматривай статистику по дисциплинам, правильные и неправильные ответы, процент успешных ответов по категориям',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'Смотри на результаты и подкрепляй слабые темы и учись на своих ошибках',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "stat-full_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#filterBlock',
          popover: {
            title: 'сүзгілер',
            description: 'тек сізді қызықтыратын нәтижелерді таңдаңыз, соның ішінде тапсыру түрі, тәртібі және тапсыру уақыты',
            side: ' bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#statsBlock',
          popover: {
            title: 'жалпы статистика',
            description: 'статистиканы қараңыз оның ішінде орташа балл, ең төменгі және ең жоғары балл, өзгерістер саны және өткен сұрақтар саны',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#categoryStatsBlock',
          popover: {
            title: 'пән статистикасы',
            description: 'пән статистикасын қараңыз, дұрыс және бұрыс жауаптар, санат бойынша сәтті жауаптар пайызы',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'нәтижелерді қараңыз және әлсіз тақырыптарды күшейтіңіз және қателіктеріңізден сабақ алыңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "unt-result_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#time_card',
          popover: {
            title: 'Время и результат тестирования',
            description: 'Таймер который указывает время затраченное на сдачу тестирования и результат тестирования',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_card',
          popover: {
            title: 'Выберите дисциплину',
            description: 'Вы можете переключаться между дисциплинами, просто нажмите на этот element',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_pagination',
          popover: {
            title: 'Выберите вопрос',
            description: 'Вы можете переключаться между вопросами, просто нажмите на этот element, также если вы ответили на вопрос он подсветиться темно-оранжевым цветом, если вы отметили вопрос, но не ответили он перекраститься в белый цвет',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prompt_indicator',
          popover: {
            title: 'Помощники',
            description: 'Вы можете запросить подсказку для вопроса, попросить ИИ ответить на вопрос, пожаловаться на вопрос или сохранить его в закладках Мои Вопросы',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_card',
          popover: {
            title: 'Блок вопроса',
            description: 'Этот блок с вопросом, контекстом если он есть и вариантами ответов',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_answers',
          popover: {
            title: 'Варианты ответов',
            description: 'Блок с ответами, если вы ответили верно он подсветиться полностью зеленым, неверно - красным, а верные ответы на которые вы не ответили подсвечиваются зеленой границей',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prev_answer_next',
          popover: {
            title: 'Блок управления',
            description: 'Переключайтесь между вопросами, просматривайте балл который вы набрали - 0, 1 или 2 балла',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'Смотри на результаты и подкрепляй слабые темы и учись на своих ошибках',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "unt-result_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#time_card',
          popover: {
            title: 'тестілеу уақыты мен нәтижесі',
            description: 'Таймер бұл тестілеуге кететін уақытты және тестілеу нәтижесін көрсетеді',
            side: ' bottom',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#subject_card',
          popover: {
            title: 'пәнді таңдаңыз',
            description: 'сіз пәндер арасында ауыса аласыз, тек осы elementті нұқыңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_pagination',
          popover: {
            title: 'сұрақты таңдаңыз',
            description: 'Сіз сұрақтар арасында ауыса аласыз, тек осы elementті нұқыңыз, егер сіз сұраққа жауап берсеңіз ол қою қызғылт сары түспен жарықтандырылады, егер сіз сұрақты белгілеген болсаңыз, бірақ жауап бермеген болсаңыз, ол ақ түске айналады',
            side: " top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prompt_indicator',
          popover: {
            title: 'көмекшілер',
            description: 'сіз сұрақты сұрай аласыз, AI сұраққа жауап беруін сұрай аласыз, сұраққа шағымдана аласыз немесе менің сұрақтарыма бетбелгі қоя аласыз',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_card',
          popover: {
            title: 'сұрақ блогы',
            description: 'сұрақ, контекст және жауап нұсқалары бар бұл блок',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#question_answers',
          popover: {
            title: 'жауап нұсқалары',
            description: 'жауап блогы, егер Сіз дұрыс жауап берсеңіз, ол толығымен жасыл, дұрыс емес қызыл түспен жарықтандырылады және сіз жауап бермеген дұрыс жауаптар жасыл шекарамен жарықтандырылады',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#prev_answer_next',
          popover: {
            title: 'басқару блогы',
            description: 'сұрақтар арасында ауысыңыз, ұпайыңызды көріңіз - 0, 1 немесе 2 ұпай',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'нәтижелерді қараңыз және әлсіз тақырыптарды күшейтіңіз және қателіктеріңізден сабақ алыңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "battle_list_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#createBattle',
          popover: {
            title: 'Создай свою игру',
            description: 'Создай свою собственную битву, укажи ставку, пароль - по желанию, и начинай игру!',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#listBattle',
          popover: {
            title: 'Игры',
            description: 'Участвуй в активных играх, или возвращайся в свои битвы, просматривай историю битв',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {popover: {title: 'Битвы', description: 'Готовься к ЕНТ играючи', popoverClass: 'iu-test-popover-class'}}
      ]
    },
    "battle_list_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: ' #createBattle',
          popover: {
            title: 'Ойыныңызды Жасаңыз',
            description: 'өз шайқасыңызды Жасаңыз, ставкаңызды, құпия сөзіңізді көрсетіңіз - міндетті емес, және ойынды бастаңыз!',
            side: "bottom",
            align: "center",
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#listBattle',
          popover: {
            title: 'Ойындар',
            description: 'белсенді ойындарға Қатысыңыз немесе шайқастарыңызға оралыңыз, шайқас тарихын қараңыз',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {popover: {title: 'Шайқастар', description: 'Ойнауға дайындалыңыз', popoverClass: 'iu-test-popover-class'}}
      ]
    },
    "battle_detail_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#battleStat',
          popover: {
            title: 'Статистики и показатели игры',
            description: 'Показатели игры, в том числе время, язык, победитель и результат',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#battleRivals',
          popover: {
            title: 'Игроки',
            description: 'Противники в игре',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#battleSteps',
          popover: {
            title: 'Этапы игры',
            description: 'Прсматривай этапы игры, верные и неверные результаты, действия с просмотром статистики и ходом соперника ',
            side: "bottom",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {popover: {title: 'Битвы', description: 'Готовься к ЕНТ играючи', popoverClass: 'iu-test-popover-class'}}
      ]
    },
    "battle_detail_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#battlestar',
          popover: {
            title: 'статистика және ойын көрсеткіштері',
            description: 'ойын көрсеткіштері, оның ішінде уақыт, тіл, жеңімпаз және нәтиже',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#battleRivals',
          popover: {
            title: 'ойыншылар',
            description: 'ойындағы қарсыластар',
            side: 'bottom',
            align: 'center',
            popoverClass: ' i u-test-popover-class'
          }
        },
        {
          element: '#battleships',
          popover: {
            title: 'Ойын кезеңдері',
            description: 'ойын кезеңдерін, дұрыс және бұрыс нәтижелерді, статистиканы қарау және қарсыластың қимылдарын қарау',
            side: 'bottom',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {popover: {title: 'Battle', description: 'ЕНТ ойнауға дайындал', popoverClass: 'iu-test-popover-class'}}
      ]
    },
    "tournament_list_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#tournamentList',
          popover: {
            title: 'Турниры',
            description: 'Участвуй в активных турнирах или просматривай в каких участвуешь сам',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Турниры',
            description: 'Соревнуйся и выигрывай ценные призы',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "tournament_list_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#tournamentList',
          popover: {
            title: 'турнирлер',
            description: 'белсенді турнирлерге қатысыңыз немесе өзіңіз қатысатын турнирлерді қараңыз',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'турнирлер',
            description: 'жарыс және бағалы сыйлықтар ұтып алу',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "tournament_detail_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#tournamentDetail',
          popover: {
            title: 'Детали турнира',
            description: 'Информация о турнире: дисциплина, язык, стоимость',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tournamentInfo',
          popover: {
            title: 'Информация о турнире',
            description: 'Информация о турнире: участники, дата окончания этапа, активный этап, победитель и доступы',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tournamentStep',
          popover: {
            title: 'Этапы турнира',
            description: 'Переключайся между этапами для просмотра прогресса этапа',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Турниры',
            description: 'Соревнуйся и выигрывай ценные призы',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "tournament_detail_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#tournamentDetail',
          popover: {
            title: 'турнир туралы мәліметтер',
            description: 'турнир туралы ақпарат: тәртіп, тіл, құны',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tournamentInfo',
          popover: {
            title: 'турнир туралы ақпарат',
            description: 'турнир туралы ақпарат: қатысушылар, кезеңнің аяқталу күні, белсенді кезең, жеңімпаз және қол жетімділік',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tournamentStep',
          popover: {
            title: 'турнир кезеңдері',
            description: 'кезеңнің барысын көру үшін кезеңдер арасында ауысыңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'турнирлер',
            description: 'жарыс және бағалы сыйлықтар ұтып алу',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },

    "career_list_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerBuy',
          popover: {
            title: 'Приобретайте профориентационные тесты',
            description: 'По выгодной цене, один тест или всю группу',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerHistory',
          popover: {
            title: 'История сдач тестов',
            description: 'Просматривайте историю и результаты ваших тестов',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuiz',
          popover: {
            title: 'Профориентационные тесты',
            description: 'Сдавайте тесты профориентации и узнайте больше о себе',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "career_list_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerBuy',
          popover: {
            title: ' кәсіптік бағдар тесттерін сатып алыңыз',
            description: 'арзан бағамен, бір тест немесе бүкіл топ',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerHistory',
          popover: {
            title: 'тест тапсыру тарихы',
            description: 'тесттеріңіздің тарихы мен нәтижелерін қараңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuiz',
          popover: {
            title: 'кәсіптік бағдар тестілері',
            description: 'кәсіптік бағдар тесттерін тапсырыңыз және өзіңіз туралы көбірек біліңіз',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: ' кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "career_detail_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizInfo',
          popover: {
            title: 'Профориентационный тест',
            description: 'Здесь предоставлена полная информация о профориентационном тесте',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerAuthor',
          popover: {
            title: 'Авторы тестов',
            description: 'Представляем вашему вниманию наших прекрасных психологов',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "career_detail_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizInfo',
          popover: {
            title: 'Кәсіптік бағдар сынағы',
            description: ' мұнда кәсіптік бағдар сынағы туралы толық ақпарат берілген',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerAuthor',
          popover: {
            title: 'Тест авторлары',
            description: 'біздің әдемі психологтарды назарларыңызға ұсынамыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: ' Кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "ONE_ANSWER_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestion',
          popover: {
            title: 'Вопрос теста',
            description: 'Внимательно прочтите вопрос теста',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswer',
          popover: {
            title: 'Ответы на тест',
            description: 'Вам даны варианты ответов, внимательно прочтите и выберите один из них',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagement',
          popover: {
            title: 'Управление тестом',
            description: 'После того как вы ответите на все вопросы вы сможете завершить тест, так же вы сможете переходить на предыдущий и следующий вопрос',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "ONE_ANSWER_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestion',
          popover: {
            title: 'тест сұрағы',
            description: ' тест сұрағын мұқият оқып шығыңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswer',
          popover: {
            title: 'тест жауаптары',
            description: 'сізге жауап нұсқалары берілген, мұқият оқып, біреуін таңдаңыз',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagement',
          popover: {
            title: 'Test Management',
            description: 'барлық сұрақтарға жауап бергеннен кейін сіз тестті аяқтай аласыз, сонымен қатар алдыңғы және келесі сұраққа ауыса аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: ' Кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "DRAG_DROP_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestionDD',
          popover: {
            title: 'Вопрос теста',
            description: 'Внимательно прочтите вопрос теста',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerDD',
          popover: {
            title: 'Ответы на тест',
            description: 'Вам даны варианты ответов, внимательно прочтите и перетащите их на колонки справа',
            side: "left",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerPlaceDD',
          popover: {
            title: 'Ответы на тест',
            description: 'Вы можете просто зажатием мыши перенести колонки слева в текущий раздел',
            side: "right",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagementDD',
          popover: {
            title: 'Управление тестом',
            description: 'После того как вы ответите на все вопросы вы сможете завершить тест, так же вы сможете переходить на предыдущий и следующий вопрос',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "DRAG_DROP_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestionDD',
          popover: {
            title: 'тест сұрағы',
            description: ' тест сұрағын мұқият оқып шығыңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerDD',
          popover: {
            title: 'тест жауаптары',
            description: 'сізге жауап нұсқалары берілген, оларды мұқият оқып, оң жақтағы бағандарға сүйреңіз',
            side: 'left',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerPlaceDD',
          popover: {
            title: 'тестке жауаптар',
            description: ' сіз жай ғана сол жақтағы динамиктерді ағымдағы бөлімге апара аласыз',
            side: 'right',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagementDD',
          popover: {
            title: 'Test Management',
            description: 'барлық сұрақтарға жауап бергеннен кейін сіз тестті аяқтай аласыз, сонымен қатар алдыңғы және келесі сұраққа ауыса аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },

    "QUESTIONS_AND_ANSWERS_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestionQA',
          popover: {
            title: 'Вопрос теста',
            description: 'Внимательно прочтите вопрос теста',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerQA',
          popover: {
            title: 'Ответы на тест',
            description: 'Вам даны варианты ответов, внимательно прочтите и выберите один из них',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagementQA',
          popover: {
            title: 'Управление тестом',
            description: 'После того как вы ответите на все вопросы вы сможете завершить тест, так же вы сможете переходить на предыдущий и следующий вопрос',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "QUESTIONS_AND_ANSWERS_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizQuestionQA',
          popover: {
            title: 'тест сұрағы',
            description: ' тест сұрағын мұқият оқып шығыңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizAnswerQA',
          popover: {
            title: 'тест жауаптары',
            description: 'сізге жауап нұсқалары берілген, мұқият оқып, біреуін таңдаңыз',
            side: ' top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuizManagementQA',
          popover: {
            title: 'Test Management',
            description: 'барлық сұрақтарға жауап бергеннен кейін сіз тестті аяқтай аласыз, сонымен қатар алдыңғы және келесі сұраққа ауыса аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: ' Кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "career_plan_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizGroup',
          popover: {
            title: 'Группа тестов',
            description: 'Здесь вы можете приобрести целую группу тестов по выгодной цене',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuiz',
          popover: {
            title: 'Тест',
            description: 'Или определенный тест, для этого достаточно просто свайпнуть справа',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Профориентация',
            description: 'Узнай больше о себе, проходя тесты разработанные нашими  профессиональными психологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "career_plan_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#careerQuizGroup',
          popover: {
            title: 'test group',
            description: ' мұнда сіз бүкіл тест тобын арзан бағамен сатып ала аласыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#careerQuiz',
          popover: {
            title: 'Test',
            description: 'немесе белгілі бір тест, бұл үшін оңға сырғыту жеткілікті',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: ' кәсіптік бағдар',
            description: 'Біздің кәсіби психологтар жасаған тесттерден өту арқылы өзіңіз туралы көбірек біліңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "iutube_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#iutubeFilter',
          popover: {
            title: 'Фильтры',
            description: 'Ищите видео используя фильтры',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#iutubeSubject',
          popover: {
            title: 'Предметы',
            description: 'Нажмите чтобы посмотреть видеоуроки только данного предмета',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#iutubeVideo',
          popover: {
            title: 'Видеоролики',
            description: 'Нажмите чтобы посмотреть видеоурок',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'IUTube',
            description: 'Смотри видеоуроки разработанные нашими методологами',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "iutube_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#iutubeFilter',
          popover: {
            title: 'Сүзгілер',
            description: 'сүзгілерді пайдаланып бейнелерді Іздеңіз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#iutubeSubject',
          popover: {
            title: 'Пәндер',
            description: 'Тек берілген пәннің бейне оқулықтарын Көру Үшін Басыңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#iutubeVideo',
          popover: {
            title: 'Бейнелер',
            description: 'Бейне оқулықты Көру Үшін Басыңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'IUTube',
            description: ' біздің әдіскерлер әзірлеген бейне оқулықтарды Қараңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "rating_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#ratingTime',
          popover: {
            title: 'Таймер',
            description: 'По окончанию таймера мы проведем выдачу призов',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#ratingTable',
          popover: {
            title: 'Список пользователей',
            description: 'Список пользователей и их подарки',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Рейтинг',
            description: ' Обходите других игроков набирая IU Coins',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "rating_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#ratingTime',
          popover: {
            title: 'Timer',
            description: 'таймер аяқталғаннан кейін біз сыйлықтар береміз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#ratingTable',
          popover: {
            title: 'пайдаланушылар тізімі',
            description: 'пайдаланушылар тізімі және олардың сыйлықтары',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Рейтинг',
            description: ' IU монеталарын теру арқылы басқа ойыншыларды айналып өтіңіз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "wallet_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#walletInfo',
          popover: {
            title: 'Управление кошельком',
            description: 'Просматривайте полноценную статистику и текущий баланс',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#walletTransaction',
          popover: {
            title: 'Транзакции',
            description: 'Транзакции кошелька и анализ расходов и доходов',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Кошелек',
            description: ' Накапливайте IU coins и обмениваете на подарки',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "wallet_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#walletInfo',
          popover: {
            title: 'әмиянды басқару',
            description: 'толық статистика мен ағымдағы балансты қараңыз',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#walletTransaction',
          popover: {
            title: 'транзакциялар',
            description: 'әмиян транзакциялары және шығындар мен кірістерді талдау',
            side: ' top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'әмиян',
            description: 'IU монеталарын жинап, сыйлықтарға айырбастаңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "unt_stats_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#statFullAction',
          popover: {
            title: 'Полная статистика',
            description: 'Просматривайте полноценную статистику нажав на кнопку',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#totalStats',
          popover: {
            title: 'Статистика',
            description: 'Общая статистика сдач тестирований',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tableStat',
          popover: {
            title: 'Таблица сдач',
            description: 'Таблица сдач тренажера, где вы сможете продолжить тестирование или просмотреть результаты',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'Смотри на результаты и подкрепляй слабые темы и учись на своих ошибках',
            popoverClass: 'iu-test-popover-class'
          }
        }]
    },
    "unt_stats_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#statFullAction',
          popover: {
            title: 'толық статистика',
            description: ' түймені басу арқылы толық статистиканы қараңыз',
            side: 'top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#totalStats',
          popover: {
            title: 'Статистика',
            description: 'тестілеудің жалпы статистикасы',
            side: 'top',
            align: ' center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          element: '#tableStat',
          popover: {
            title: 'SD кестесі',
            description: 'тестілеуді жалғастыруға немесе нәтижені көруге болатын тренажер кестесі',
            side: ' top',
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        },
        {
          popover: {
            title: 'Статистика',
            description: 'нәтижелерді қараңыз және әлсіз тақырыптарды күшейтіңіз және қателіктеріңізден сабақ алыңыз',
            popoverClass: 'iu-test-popover-class'
          }
        }]
    },


    "my_questions_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myQuestions',
          popover: {
            title: 'Ваши вопросы',
            description: 'Вопросы на которые вы подали аппеляцию или сохранили',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_questions_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myQuestions',
          popover: {
            title: 'сіздің сұрақтарыңыз',
            description: 'Сіз шағымданған немесе сақтаған сұрақтар',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_classrooms_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myClassrooms',
          popover: {
            title: 'Ваши классы',
            description: 'Тут вы можете вступить в класс, сдать тестирование по промокоду или покинуть класс',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_classrooms_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myClassrooms',
          popover: {
            title: 'Сіздің сыныптарыңыз',
            description: 'Мұнда сіз сыныпқа кіре аласыз, жарнамалық код бойынша тестілеуден өте аласыз немесе сыныптан кете аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_attempts_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myAttempts',
          popover: {
            title: 'Ваши задания',
            description: 'Тут вы можете сдать задания назначенным вашим преподавателем',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_attempts_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myAttempts',
          popover: {
            title: 'Сіздің тапсырмаларыңыз',
            description: 'Мұнда сіз тағайындалған оқытушымен тапсырмаларды тапсыра аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_news_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myNews',
          popover: {
            title: 'Новости',
            description: 'Тут вы можете посмотреть новости',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_news_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myNews',
          popover: {
            title: 'Жаңалықтар',
            description: 'Мұнда сіз жаңалықтарды көре аласыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "notifications_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myNotification',
          popover: {
            title: 'Сообщения',
            description: 'Просматривайте сообщения и нотификации используя фильтры',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "notifications_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myNotification',
          popover: {
            title: 'Хабарламалар',
            description: 'Сүзгілерді пайдаланып хабарламалар мен жазбаларды қараңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "forum_list_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#forumList',
          popover: {
            title: 'Форум',
            description: 'Просматривайте форумы, используя фильтры и посиковик, или же создайте ее сами',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "forum_list_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#forumList',
          popover: {
            title: 'Форум',
            description: 'Сүзгілер мен іздеу жүйесін пайдаланып форумдарды шолыңыз немесе оны өзіңіз жасаңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_tickets_ru": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myTickets',
          popover: {
            title: 'Тикеты',
            description: 'Просматривайте свои тикеты и обращения к техподдержку',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },
    "my_tickets_kk": {
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: 'Ok',
      steps: [
        {
          element: '#myTickets',
          popover: {
            title: 'Билеттер',
            description: 'Билеттеріңізді және техникалық қолдау қоңырауларын қараңыз',
            side: "top",
            align: 'center',
            popoverClass: 'iu-test-popover-class'
          }
        }
      ]
    },


  }
}
