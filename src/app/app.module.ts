import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChosseWorkerComponent } from './steps/Components/chosse-worker/chosse-worker.component';
import { LocationComponent } from './steps/Components/location/location.component';
import { FormsModule } from '@angular/forms';

import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { StepsModule } from './steps/steps.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule,
    DialogModule,
    SharedModule,
    AppRoutingModule,
    StepsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
