import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class HttpClient {

    headers;
    constructor(private http: Http, private _router:Router) {
        this.headers = new Headers();
    }

    setHeader(header, value) {
        this.headers.append(header, value);
    }

    private catchAuthError (self: HttpClient) {
        // we have to pass HttpService's own instance here as `self`
        return (res: Response) => {
            if (res.status === 401 || res.status === 403) {
                let currentUrl = this._router.url;
                // if not authenticated
                if (currentUrl == "/login") console.log("Login failed");
                else this._router.navigate(['login'])
            }
            return Observable.throw(res);
        };
    }

    get(url, params?) {
        return this.http.get(url, {
            search: params,
            headers: this.headers
        }).catch(this.catchAuthError(this));;
    }

    post(url, data) {
        return this.http.post(url, data, {
            headers: this.headers
        }).catch(this.catchAuthError(this));;
    }
}