import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    private _http = inject(HttpClient)

    setDataToLocalStorage(key: string, data: any) {
      if (data != null) {
        localStorage.setItem(key, JSON.stringify(data))
      }
    }

    getDataFromLocalStorage(key: string) {
      if (localStorage.getItem(key) != null) {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(key))
      }
    }

    removeDataFromLocalStorage(key: string) {
      localStorage.removeItem(key)
    }
}
