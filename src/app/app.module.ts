import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { StepsComponent } from './steps/steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { ChosseWorkerComponent } from './steps/chosse-worker/chosse-worker.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './steps/location/location.component';
import { FormsModule } from '@angular/forms';

import {SliderModule} from 'primeng/slider';


const appRoutes :Routes =[
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'steps',
    component:StepsComponent,
    children: [
      {
        path:'workers',
        component:ChosseWorkerComponent,
      },
      {
        path:'location',
        component:LocationComponent
      }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    StepsComponent,
    ChosseWorkerComponent,
    HomeComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
