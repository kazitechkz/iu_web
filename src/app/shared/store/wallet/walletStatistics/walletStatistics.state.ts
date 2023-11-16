import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {WalletStatisticsModel} from "./walletStatistics.model";

export const walletStatisticsAdapter = createEntityAdapter<WalletStatisticsModel>();

export const walletStatisticsState: EntityState<WalletStatisticsModel> = walletStatisticsAdapter.getInitialState();
