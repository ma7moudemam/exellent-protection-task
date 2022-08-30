import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SocailComponent } from './Components/socail/socail.component';
import { LandingComponent } from './Components/landing/landing.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocailComponent,
    HomeComponent,
    LandingComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SocailComponent,
    HomeComponent,
    LandingComponent,
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
    

  ]
})
export class SharedModule { }
