import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UtmAction} from "../../shared/store/utm/utm.action";
import {UtmRequest} from "../../shared/store/utm/utm.request";

@Component({
  selector: 'app-test2024',
  templateUrl: './test2024.component.html',
  styleUrls: ['./test2024.component.scss']
})
export class Test2024Component implements OnInit {
  private _store = inject(Store)
  ngOnInit(): void {
    this.utm()
  }

  utm() {
    let reqUtm: UtmRequest = {url: "https://iutest.kz/dashboard/test2024"}
    this._store.dispatch(UtmAction({req: reqUtm}));
  }
}
