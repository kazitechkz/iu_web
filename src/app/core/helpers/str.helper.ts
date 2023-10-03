export class StrHelper {

  public static getRouteName(route: string): string {
    return '/' + route;
  }

  public static getDashboardRouteName(route: string): string {
    return '/dashboard/' + route;
  }
}
