import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {WalletIndexModel} from "./walletIndex.model";

export const walletIndexAdapter = createEntityAdapter<WalletIndexModel>();

export const walletIndexState: EntityState<WalletIndexModel> = walletIndexAdapter.getInitialState();
