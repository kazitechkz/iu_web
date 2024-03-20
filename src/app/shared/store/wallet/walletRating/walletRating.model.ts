import {Pagination} from "../../pagination";
import {Wallet} from "../../../models/wallet.model";

export interface WalletRatingModel {
    ratings: Pagination<Wallet[]>,
    place: number
}
