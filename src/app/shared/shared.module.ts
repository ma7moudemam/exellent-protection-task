import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SocailComponent } from './Components/socail/socail.component';
import { LandingComponent } from './Components/landing/landing.component';
import { HomeComponent } from './Components/home/home.component';



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
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SocailComponent,
    HomeComponent,
    LandingComponent

  ]
})
export class SharedModule { }
