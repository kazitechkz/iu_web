export class StrHelper {

  public static getRouteName(route: string): string {
    return '/' + route;
  }

  public static getDashboardRouteName(route: string): string {
    return '/dashboard/' + route;
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
}
