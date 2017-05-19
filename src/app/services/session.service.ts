import { Injectable } from '@angular/core';
import { HttpClient } from './httpclient.service';
import { Observable } from 'rxjs/Observable';
import {  Response } from '@angular/http';


@Injectable()
export class SessionService {
    constructor(private httpclient: HttpClient) { }

    remember: boolean = false;
    user = {};
    token = null;
    logged = false;

    setRemember(v:boolean) {
        this.remember = v;
    }

    setUser(u:any) {
        this.user = u;
        this.httpclient.setHeader('X-Auth-Username', u ? u.username || null : null)
        if (localStorage && this.remember) localStorage.user = JSON.stringify(u);
    }
    getUser() {
        return this.user;
    }

    setToken(t) {
        this.token = t;
        this.httpclient.setHeader('X-Auth-Token', t || null)
        if (localStorage && this.remember) localStorage.token = t;
    }
    getToken() {
        return this.token;
    }

    setLogged(v:boolean) {
        this.logged = v
    }

    isLogged () : boolean {
        return this.logged;
    }

    logout() {
        this.user = {};
        this.token = null;
        this.logged = false;
        if (localStorage) localStorage.clear();
    }
}