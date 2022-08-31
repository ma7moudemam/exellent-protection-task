import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { StepsComponent } from './Components/steps/steps.component';
import { ChosseWorkerComponent } from './Components/chosse-worker/chosse-worker.component';
import { LocationComponent } from './Components/location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { WorkerPopupComponent } from './Components/worker-popup/worker-popup.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    StepsComponent,
    ChosseWorkerComponent,
    LocationComponent,
    WorkerPopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule,
    DialogModule,
    TranslateModule,
    BrowserModule
  ],
  exports: [
    ChosseWorkerComponent,
    LocationComponent,
    StepsComponent

  ]
})
export class StepsModule { }
