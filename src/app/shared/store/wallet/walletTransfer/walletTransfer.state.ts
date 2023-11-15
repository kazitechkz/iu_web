import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const walletTransferAdapter = createEntityAdapter<boolean>();

export const walletTransferState: EntityState<boolean> = walletTransferAdapter.getInitialState();
