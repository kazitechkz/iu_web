import {Component, inject, OnInit} from '@angular/core';
import {KundelikService} from "../kundelik.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {kundelikAction} from "../../shared/store/auth/kundelik/kundelik.action";
import {KundelikRequest} from "../../shared/store/auth/kundelik/kundelik.request";
import {getKundelikState} from "../../shared/store/auth/kundelik/kundelik.selector";

@Component({
  selector: 'app-kundelik',
  templateUrl: './kundelik.component.html',
  styleUrls: ['./kundelik.component.scss']
})
export class KundelikComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute)
  private store = inject(Store)
  private access_token: string = ''
  constructor() {}

  initialData()
  {
    this.activateRoute.fragment.subscribe(item => {
      let queryStr = item?.split('&')
      if (queryStr) {
        // Проходимся по каждой части
        for (var i = 0; i < queryStr.length; i++) {
          // Разбиваем часть по символу "="
          var keyValue = queryStr[i].split('=');
          // Если первая часть (ключ) равна "access_token", сохраняем вторую часть (значение)
          if (keyValue[0] === 'access_token') {
            this.access_token = keyValue[1];
            if (this.access_token !== '') {
              let req = {token: this.access_token} as KundelikRequest
                this.store.dispatch(kundelikAction({requestData: req}))
                this.store.select(getKundelikState).pipe().subscribe(item => {
                  console.log(item)
                })
            }
            // Если нашли токен, выходим из цикла
            break;
          }
        }
      }
    })
  }

  ngOnInit(): void {
    this.initialData()
  }
}
