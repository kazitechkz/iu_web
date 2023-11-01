import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {closeSidebarAction, openSidebarAction} from "./sidebar.action";

@Injectable()
export class SidenavEffects {

  openSidenav$ = createEffect(() =>
      this.actions$.pipe(
        ofType(openSidebarAction),
        tap(() => {
          // Выполните действия при открытии сайдбара
        })
      ),
    { dispatch: false }
  );

  closeSidenav$ = createEffect(() =>
      this.actions$.pipe(
        ofType(closeSidebarAction),
        tap(() => {
          // Выполните действия при закрытии сайдбара
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
