import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list'; 
import { SearchPipe} from './pipe/filter.pipe';
import { SearchPipeS} from './pipe/filterS.pipe';
import { ProfileGuard }   from './pr.guard';
import {BigimgService} from "./service/prof.service";

import { AppComponent }   from './app.component';
import { MainComponent }   from './main.component';
import { ProfileComponent }   from './profile.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { HttpService } from './service/http.service';
import { ParamInterceptor } from './api.interceptor';



const appRoutes: Routes =[
    { path: '', component: MainComponent},
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports:      [ BrowserAnimationsModule, BrowserModule, ReactiveFormsModule, MatListModule, CommonModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, MainComponent, ProfileComponent, NotFoundComponent, SearchPipe, SearchPipeS],
    providers:    [ HttpService, ProfileGuard, BigimgService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ParamInterceptor,
        multi: true
      } ],
    bootstrap:    [ AppComponent ]


})
export class AppModule { }
