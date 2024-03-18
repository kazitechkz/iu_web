import {Component, inject, Input} from '@angular/core';
import {driver} from "driver.js";
import {GlobalTranslateService} from "../../services/globalTranslate.service";

@Component({
  selector: 'app-information-bear',
  templateUrl: './information-bear.component.html',
  styleUrls: ['./information-bear.component.scss']
})
export class InformationBearComponent {
  @Input() pageName:string = "";


  driverObj:any = driver();
  public translate = inject(GlobalTranslateService);
  driverPages:{ [key: string]: any; } = {
    "student_index_page_ru": {
      showProgress: true,
      steps: [
        { element: '#main-index-page', popover: { title: 'Добро пожаловать в iU test', description: 'Здесь ты найдешь все что необходимо для успешной сдачи ЕНТ.', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#main-index-services', popover: { title: 'Наши сервисы', description: 'У нас есть тренажеры ент, онлайн материалы для обучения и многое другое', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Удачного пути!', description: 'Надеемся что сервис для тебя окажется полезным!', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "student_index_page_kk": {
      showProgress: true,
      steps: [
        { element: '#main-index-page', popover: { title: 'iU test-ке Қош келдіңіз', description: 'Мұнда сіз ҰБТ-ны сәтті тапсыру үшін қажет нәрсенің бәрін таба аласыз.', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#main-index-services', popover: { title: 'Біздің қызметтер', description: 'Бізде ҰБТ тренажерлері, онлайн Оқу материалдары және т. б. бар', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Ақ жол!', description: 'Қызмет сізге пайдалы болады деп үміттенеміз!', popoverClass: 'iu-test-popover-class' } }
      ]
    },
    "my-profile_ru": {
      showProgress: true,
      steps: [
        { element: '#profile-info-card', popover: { title: 'Карта профиля пользователя', description: 'Доступная информация о вашем профиле включая почту, телефон, email, статус.', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#profile-info-card-pencil', popover: { title: 'Измените свои данные', description: 'Меняйте свою личные информацию одним нажатием кнопки', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#profile-info-subscriptions', popover: { title: 'Мои подписки', description: 'Здесь вы можете увидить список активных подписок, которые вы приобрели', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#profile-info-transactions', popover: { title: 'Мои транзакции', description: 'Список ваших финансовых операций также достуен', side: "right", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Раздел Профиль', description: 'Информативная панель будет иметь больше функциональных возможностей в будущем', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "my-profile_kk": {
      showProgress: true,
      steps: [
        { element:' #profile-info-card', popover: {title:'Пайдаланушы профилінің картасы', description: 'Сіздің профиліңіз туралы қол жетімді ақпарат оның ішінде пошта, телефон, электрондық пошта, күй.', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#profile-info-card-pencil', popover: { title: 'Деректеріңізді өзгертіңіз', description: 'Түймені басу арқылы жеке ақпаратыңызды өзгертіңіз', side: 'left', align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#profile-info-subscriptions', popover: { title: 'Менің жазылымдарым', description:' Мұнда Сіз сатып алған белсенді жазылымдардың тізімін көре аласыз', side: 'left', align: 'start', popoverClass: 'iu-test-popover-class'}},
        { element: '#profile-info-transactions', popover: { title: 'Менің транзакцияларым', description:' Сіздің қаржылық операцияларыңыздың тізімі де қол жетімді', side: 'right', align: 'start', popoverClass:' iu-test-popover-class'}},
        { popover: { title: 'Профиль бөлімі', description: 'Ақпараттық тақта болашақта көбірек функционалдылыққа ие болады', popoverClass:' iu-test-popover-class'} }
      ]
    },
    "step_ru": {
      showProgress: true,
      steps: [
        { element: '#step-cards', popover: { title: 'Карты обучений', description: 'Выбирайте дисциплину и начинайте учиться уже сегодня не выходя из дома.', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#step-cards-steps', popover: { title: 'Этапы предмета', description: 'Мы поделили дисциплину на главы для более удобного обучения, учитесь шаг за шагом преодолевая самые главные темы', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#step-cards-sub-steps', popover: { title: 'Разделы этапов подписки', description: 'Для более точного обучения мы поделили главы на более точечные разделы, чтобы укрепить все темы', side: "right", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#step-cards-progress', popover: { title: 'Мой прогресс', description: 'Отслеживайте ваш прогресс и получайте призы и подарки', side: "top", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Раздел обучения', description: 'Пусть раздел обучения будет легким и насыщенным', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "step_kk": {
      showProgress: true,
      steps: [
        { element:'#step-cards', popover: {title:' Оқу карталары', description: 'Тәртіпті таңдап, бүгін үйден шықпай-ақ оқуды бастаңыз.', side: "top", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element:'#step-cards-steps', popover: {title: 'Тақырып кезеңдері', description: 'Біз тәртіпті ыңғайлы оқу үшін тарауларға бөлдік, ең маңызды тақырыптарды кезең-кезеңімен жеңе отырып үйреніңіз', side: 'left', align: 'start', popoverClass:'iu-test-popover-class'}},
        { element:'#step-cards-sub-steps', popover: { title: 'Жазылым кезеңдерінің бөлімдері', description: 'Дәлірек оқыту үшін біз барлық тақырыптарды нығайту үшін тарауларды нүктелік бөлімдерге бөлдік', side: "right", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element:'#step-cards-progress', popover: { title: 'Менің прогресім', description: 'үлгеріміңізді қадағалаңыз және сыйлықтар мен сыйлықтар алыңыз', side:' top', align:' center', popoverClass: 'iu-test-popover-class'}},
        { popover: { title: 'Оқу бөлімі', description:' Оқу бөлімі жеңіл және қанық болсын', popoverClass:' iu-test-popover-class'} }
      ]
    },
    "sub_step_ru": {
      showProgress: true,
      steps: [
        { element: '#sub_steps_all', popover: { title: 'Этапы обучения', description: 'Шаг за шагом осваивайте дисциплину', side: "left", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#sub_steps_detail', popover: { title: 'Элемент этапа', description: 'Нажмите на этап обучения и вам откроются разделы, осваиваете шаг за шагом большие главы', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { element: '#sub_step_fact', popover: { title: 'Факты дисциплины', description: 'Информационный раздел этапа поможет вам узнать интересный факт из материала', side: "top", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#sub_step_locale', popover: { title: 'Язык обучения', description: 'Переключайтесь между языками и обучайтесь на удобном вам языке', side: "top", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#sub_step_subjects', popover: { title: 'Выберите дисциплину', description: 'Выберите наиболее удобную для вас дисциплину и начните обучение', side: "top", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Раздел этапов обучения', description: 'Обучайтесь в удобном для вас формате', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "sub_step_kk": {
      showProgress: true,
      steps: [
        { element: '#sub_steps_all', popover: { title: 'Оқу кезеңдері', description: 'Тәртіпті біртіндеп меңгеру', side: 'left', align:' center', popoverClass:' iu-test-popover-class'}},
        { element: '#sub_steps_detail', popover: {title: 'Кезең элементі', description: 'Оқу кезеңін нұқыңыз, сонда сіз бөлімдерді ашасыз, үлкен тарауларды біртіндеп игересіз', side: 'left', align: 'start', popoverClass: 'iu-test-popover-class'}},
        { element: '#sub_step_fact', popover: {title: 'Тәртіп фактілері', description: 'Кезеңнің ақпараттық бөлімі Сізге қызықты фактіні материалдан білуге көмектеседі', side: 'top', align: 'center', popoverClass:' iu-test-popover-class'}},
        { element: '#sub_step_locale', popover: {title: 'Оқу тілі', description: 'Тілдер арасында ауысып, өзіңізге ыңғайлы тілде үйреніңіз', side: 'top', align:' center', popoverClass:' iu-test-popover-class'}},
        { element: '#sub_step_subjects', popover: {title: 'Пәнді таңдаңыз', description: 'Сізге ыңғайлы пәнді таңдап, оқуды бастаңыз', side: 'top', align:' center', popoverClass:' iu-test-popover-class'}},
        { popover: { title: 'Оқу кезеңдері бөлімі', description: 'Cізге ыңғайлы форматта оқы', popoverClass:' iu-test-popover-class'} }
      ]
    },
    "sub_step_content_ru": {
      showProgress: true,
      steps: [
        { element: '#sub_step_content', popover: { title: 'Контент обучения', description: 'Учитесь и смотрите видеоролики от наших преподавателей', side: "left", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#sub_step_action', popover: { title: 'Действия обучения', description: 'Не забудьте закрепить ваш прогресс прохождением теста, просмотров результатов прошлого теста и пересдачей', side: "left", align: 'start', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Раздел контента обучения', description: 'Наши методологи постоянно обновляют материалы и контент', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "sub_step_content_kk": {
      showProgress: true,
      steps: [
        { element: '#sub_step_content', popover: {title: 'Оқу мазмұны', description: 'Біздің оқытушылардан бейнелерді үйреніңіз және көріңіз', side: 'left', align: 'center', popoverClass:' iu-test-popover-class'}},
        { element: '#sub_step_action', popover: {title: 'Оқу әрекеттері', description:' Тест тапсыру, өткен тест нәтижелерін қарау және қайта тапсыру арқылы үлгеріміңізді бекітуді ұмытпаңыз', side: 'left', align: 'start', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Оқу мазмұны бөлімі', description: 'Біздің әдіскерлер материалдар мен мазмұнды үнемі жаңартып отырады', popoverClass:' iu-test-popover-class'} }
      ]
    },

    "unt_mode_ru": {
      showProgress: true,
      steps: [
        { element: '#unt-full-mode', popover: { title: '5 предметов для сдачи', description: 'Вы можете сдать полноценное тестирование ЕНТ состоящий из 2 профильных и 3 обязательных предметов', side: "left", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#unt-single-mode', popover: { title: '1 предмет', description: 'Выберите одну дисциплину и вам будет доступен полный тест по этой дисциплине', side: "bottom", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#unt-custom-mode', popover: { title: 'Настрой под свой режим', description: 'Выбирайте дисциплину и тему, прокачивайте свои слабые темы вместе с нами!', side: "right", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'Раздел тренажера', description: 'Сдавайте ЕНТ под свой темп и набирайте наивысший балл', popoverClass: 'iu-test-popover-class'} }
      ]
    },
    "unt_mode_kk": {
      showProgress: true,
      steps: [
        { element: '#unt-full-mode', popover: {title: 'Тапсыруға арналған 5 Элемент', description:' Сіз толық тестілеуді тапсыра аласыз ЕНТ 2 профильді және 3 міндетті элементтен тұрады', side: 'left', align: 'center', popoverClass: 'iu-test-popover-class' }},
        { element: '#unt-single-mode', popover: {title: '1 пән', description: 'бір пәнді таңдаңыз және сізге осы пән бойынша толық тест қол жетімді болады', side: 'bottom', align: 'center', popoverClass: 'iu-test-popover-сынып'}},
        { element: '#unt-custom-mode', popover: {title: 'өз режиміңді баптау', description: 'тәртіп пен тақырыпты таңдаңыз, әлсіз тақырыптарыңызды бізбен бірге айдаңыз!', side: "right", align: 'center', popoverClass: 'iu-test-popover-class' }},
        { popover: { title: 'тренажер бөлімі', description: 'өз қарқыныңызбен ұпай жинап, ең жоғары балл жинаңыз', popoverClass:' iu-test-popover-class'} }
      ]
    },

  }


  showTour(){
    this.driverObj = driver(this.driverPages[this.pageName + this.translate.currentLang]);
    this.driverObj.drive()
  }


}
