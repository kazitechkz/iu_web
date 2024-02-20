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
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : "mVjYG9TSN88";
  }
}
