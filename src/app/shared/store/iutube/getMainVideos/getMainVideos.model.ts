import {IutubeVideo} from "../../../models/iutubeVideo.model";

export interface GetMainVideosModel{
  recommended:IutubeVideo[]
  public_videos:IutubeVideo[]
}
