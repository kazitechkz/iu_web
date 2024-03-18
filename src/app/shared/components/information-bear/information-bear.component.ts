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
        { element: '#main-index-page', popover: { title: 'Добро пожаловать в iU test', description: 'Здесь ты найдешь все что необходимо для успешной сдачи ЕНТ.', side: "left", align: 'start' }},
        { element: '#main-index-services', popover: { title: 'Наши сервисы', description: 'У нас есть тренажеры ент, онлайн материалы для обучения и многое другое', side: "top", align: 'start' }},
        { popover: { title: 'Удачного пути!', description: 'Надеемся что сервис для тебя окажется полезным!' } }
      ]
    },
    "student_index_page_kk": {
      showProgress: true,
      steps: [
        { element: '#main-index-page', popover: { title: 'iU test-ке Қош келдіңіз', description: 'Мұнда сіз ҰБТ-ны сәтті тапсыру үшін қажет нәрсенің бәрін таба аласыз.', side: "left", align: 'start' }},
        { element: '#main-index-services', popover: { title: 'Біздің қызметтер', description: 'Бізде ҰБТ тренажерлері, онлайн Оқу материалдары және т. б. бар', side: "top", align: 'start' }},
        { popover: { title: 'Ақ жол!', description: 'Қызмет сізге пайдалы болады деп үміттенеміз!' } }
      ]
    },
  }


  showTour(){
    this.driverObj = driver(this.driverPages[this.pageName + this.translate.currentLang]);
    this.driverObj.drive()
  }


}
