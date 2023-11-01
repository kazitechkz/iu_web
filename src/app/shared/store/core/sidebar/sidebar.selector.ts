import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SidenavState} from "./sidebar.state";

export const selectSidenavState = createFeatureSelector<SidenavState>('sidenav');

export const selectSidenavIsOpen = createSelector(
  selectSidenavState,
  (state: SidenavState) => state.isOpen
);
