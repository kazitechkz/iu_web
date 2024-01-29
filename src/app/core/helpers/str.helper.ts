import * as moment from 'moment'

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

  public static getRouteByRole(role: string | undefined, route: string) {
    if (role) {
      if (role == 'student') {
        return this.getDashboardRouteName(route)
      } else {
        return this.getTeacherRouteName(route)
      }
    } else {
      return this.getDashboardRouteName(route)
    }
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

  public static getCurrentLangByLocaleID(localeID: number): string {
    if (localeID == 1) {
      return 'kk'
    } else {
      return 'ru'
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

  public static getProgressByLocaleID(value: any, lang: number | null): number {
    if (lang != null) {
      if (lang == 1) {
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

  public static getTimeForTournament(tournament_time: any, x: any) {
    let t = moment.duration(tournament_time, 'minutes'),
        l = moment.duration(x, 'milliseconds'),
        d = moment.duration(Math.floor(t.asMilliseconds())-Math.floor(l.asMilliseconds()), 'milliseconds'),
        hourText = '<small class="px-1">час</small>',
        minuteText = '<small class="px-1">мин</small>',
        secondText = '<small class="px-1">сек</small>'
    if (Math.floor(d.asHours()) >= 1) {
      let hours = Math.floor(d.asHours()),
          minutes = Math.floor(d.asMinutes()) - hours * 60,
          seconds = Math.floor(d.asSeconds()) - minutes * 60;
      return hours + hourText + minutes + minuteText + seconds + secondText
    } else if (Math.floor(d.asMinutes()) >= 1) {
      let minutes = Math.floor(d.asMinutes()),
          seconds = Math.floor(d.asSeconds()) - minutes * 60;
      return minutes + minuteText + seconds + secondText
    }
    else {
      let seconds = Math.floor(d.asSeconds());
      return seconds + secondText
    }
  }
}
