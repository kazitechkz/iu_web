export class ImageHelper {
    public static  ImageUrl:string = "https://iunion.s3.ap-south-1.amazonaws.com/";
  public static getImage(url: string|null|undefined): string {
    if(url){
      return this.ImageUrl + url;
    }
    else{
      return "assets/images/bear_office.png";
    }
  }
}
