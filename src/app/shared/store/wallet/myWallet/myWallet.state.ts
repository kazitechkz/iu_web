import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Wallet} from "../../../models/wallet.model";

export const myWalletAdapter = createEntityAdapter<Wallet>();

export const myWalletState: EntityState<Wallet> = myWalletAdapter.getInitialState();
