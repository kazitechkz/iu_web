import {IutubeAuthor} from "../../../models/iutubeAuthor.model";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";

export interface GetVideoAuthorDetailModel{
  author:IutubeAuthor,
  videos:Pagination<IutubeVideo[]>
}
