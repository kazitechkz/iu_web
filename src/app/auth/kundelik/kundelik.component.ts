import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {kundelikAction} from "../../shared/store/auth/kundelik/kundelik.action";
import {KundelikRequest} from "../../shared/store/auth/kundelik/kundelik.request";
import {getKundelikState} from "../../shared/store/auth/kundelik/kundelik.selector";
import {BusyService} from "../../shared/services/busy.service";
import {RoutesName} from "../../core/constants/routes.constants";

@Component({
  selector: 'app-kundelik',
  templateUrl: './kundelik.component.html',
  styleUrls: ['./kundelik.component.scss']
})
export class KundelikComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute)
  private busyService = inject(BusyService)
  private store = inject(Store)
  private route = inject(Router)
  private access_token: string = ''
  errors:Record<string, string[]> | null = null;
  constructor() {}

  initialData() {
    this.busyService.busy();
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
                  if(item.errors){
                    this.errors = item.errors;
                    this.route.navigateByUrl(RoutesName.loginRoute).then(() => null)
                  }
                  this.busyService.idle();
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
