import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, ɵHttpInterceptingHandler} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { StepsModule } from './steps/steps.module';
import { transition } from '@angular/animations';


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
    StepsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/' , '.json')
}
