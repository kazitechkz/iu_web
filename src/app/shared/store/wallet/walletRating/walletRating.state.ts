import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Wallet} from "../../../models/wallet.model";
import {Pagination} from "../../pagination";

export const walletRatingAdapter = createEntityAdapter<Pagination<Wallet[]>>();

export const walletRatingState: EntityState<Pagination<Wallet[]>> = walletRatingAdapter.getInitialState();
