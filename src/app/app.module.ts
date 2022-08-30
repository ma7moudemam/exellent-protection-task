import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, ɵHttpInterceptingHandler} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from './shared/shared.module';
import { StepsModule } from './steps/steps.module';
import { transition } from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserAnimationsModule,
    SliderModule,
    DialogModule,
    StepsModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
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
