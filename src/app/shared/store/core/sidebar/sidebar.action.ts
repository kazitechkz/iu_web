import {Action, createAction, props} from "@ngrx/store";
import {SidebarActionTypes} from "./sidebar.action.types";


export const openSidebarAction = createAction(SidebarActionTypes.openSidenav);
export const closeSidebarAction = createAction(SidebarActionTypes.closeSidenav)
