import {createReducer, on} from "@ngrx/store";
import {initialSidebarState} from "./sidebar.state";
import {closeSidebarAction, openSidebarAction} from "./sidebar.action";

export const sidenavReducer = createReducer(
  initialSidebarState,
  on(openSidebarAction, state => ({ ...state, isOpen: true })),
  on(closeSidebarAction, state => ({ ...state, isOpen: false }))
);
