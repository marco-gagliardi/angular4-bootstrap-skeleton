import { Injectable } from '@angular/core';
import {HttpClient} from "./httpclient.service";
import {SessionService} from "./session.service";
import {Response} from "@angular/http";

@Injectable()

export class ApiService {

    private baseUrl = "http://yourdomain.com/api/v1";
    constructor(private httpclient: HttpClient, private sessionService: SessionService) { }

    login(params) {
        return this.httpclient.post(this.baseUrl + '/Login', params)
    }
}