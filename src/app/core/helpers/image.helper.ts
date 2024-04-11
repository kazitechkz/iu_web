export class ImageHelper {
    public static  ImageUrl:string = "https://iunion.s3.ap-south-1.amazonaws.com/";
  public static getImage(url: string|null|undefined): string {
    if(url){
      return this.ImageUrl + url;
    }
    else{
      return "/assets/images/bear_office.webp";
    }
  }

  public static getYoutubeThumbnail (youtubeURL:string) : string {
      let videoid = this.GetYoutubeID(youtubeURL);
      let imgUrl = "http://i.ytimg.com/vi/"+videoid.toString()+"/hqdefault.jpg";
      return imgUrl;
  }

  public static GetYoutubeID(url:string):string{
    var regExpFullVideo = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExpFullVideo);
    var urlFull = (match&&match[7].length==11) ? match[7] : null;
    if(urlFull){
      return  urlFull;
    }
    const regexShorts = "(youtu.*be.*)\\/(watch\\?v=|embed\\/|v|shorts|)(.*?((?=[&#?])|$))";
    const matchShort = url.match(regexShorts);
    if (matchShort) {
      return  matchShort[3]; // Идентификатор видео находится в первой захваченной группе
    }
    return  "jXyWx5mTF_4"
  }
}
