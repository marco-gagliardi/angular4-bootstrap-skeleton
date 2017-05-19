import { Component } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.style.css']
})
export class LoginComponent {
    requestInProgress: boolean = false;

    constructor (
        private sessionService: SessionService,
        private apiService: ApiService,
        private router: Router,
    ) { }

    login(username, password,rememberme) {
        this.requestInProgress = true;
        this.apiService.login({username: username, password: password})
            .subscribe(
                data => {
                    this.requestInProgress = false;
                    console.log(data)
                    /*let user = data.json();
                    if (user) {
                        this.setUser(user)
                    }*/
                    this.router.navigate(['dashboard']);
                },
                error => {
                    //TODO alert error
                    this.requestInProgress = false;
                });
    }
}
