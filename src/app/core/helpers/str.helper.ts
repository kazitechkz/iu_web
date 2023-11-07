export class StrHelper {

  public static getRouteName(route: string): string {
    return '/' + route;
  }

  public static getDashboardRouteName(route: string): string {
    return '/dashboard/' + route;
  }
  public static getTeacherRouteName(route: string): string {
    return '/teacher/' + route;
  }

  public static getLocaleIdByCurrentLang(lang: string | null): number {
    if (lang != null) {
      if (lang == 'kk') {
        return 1
      } else {
        return 2
      }
    } else {
      return 1
    }
  }

  public static getProgressByCurrentLang(value: any, lang: string | null): number {
    if (lang != null) {
      if (lang == 'kk') {
        return value.progress_kk
      } else {
        return value.progress_ru
      }
    } else {
      return value.progress_kk
    }
  }

  public static toMathJax(input_string:string):string{
    let output_string = "";
    output_string = input_string.replaceAll("<pre>", "$$")
    output_string = output_string.replaceAll("</pre>", "$$")
    return output_string;
  }
}
