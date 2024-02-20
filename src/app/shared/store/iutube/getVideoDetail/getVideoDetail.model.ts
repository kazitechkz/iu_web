import {IutubeAuthor} from "../../../models/iutubeAuthor.model";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";

export interface GetVideoDetailModel {
  video:IutubeVideo,
  also_recommended:IutubeVideo[]|null
}
