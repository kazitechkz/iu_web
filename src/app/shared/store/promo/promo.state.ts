import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const promoAdapter = createEntityAdapter<number>();
export const promoState: EntityState<number> = promoAdapter.getInitialState();
