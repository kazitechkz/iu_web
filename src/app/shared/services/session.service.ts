import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    private _http = inject(HttpClient)

    setUserToLocalStorage(userdata: UserInfo) {
        localStorage.setItem('userdata', JSON.stringify(userdata))
    }
}
