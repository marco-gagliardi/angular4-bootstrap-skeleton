import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SessionService} from './services/session.service'

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {LoginComponent} from "./components/login/login.component";
import {HttpClient} from "./services/httpclient.service";
import {ApiService} from "./services/api.service";
import {DashboardHeader} from "./components/dashboard/header.component";
import {DashboardMain} from "./components/dashboard/main.component";
import {DashboardMenu} from "./components/dashboard/menu.component";

const appRoutes: Routes = [
  {     path: 'dashboard',
      component: DashboardComponent,
      children: [
          {
              path: '',
              component: DashboardHeader,
              outlet: 'header'
          },
          {
              path: '',
              component: DashboardMain,
              outlet: 'page'
          },
          {
              path: '',
              component: DashboardMenu,
              outlet: 'menu'
          }
      ]

  },
  { path: 'login',      component: LoginComponent },


  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,DashboardComponent,LoginComponent, DashboardMain, DashboardHeader, DashboardMenu
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SessionService, HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
