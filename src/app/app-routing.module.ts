import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/Components/home/home.component';
import { ChosseWorkerComponent } from './steps/Components/chosse-worker/chosse-worker.component';
import { LocationComponent } from './steps/Components/location/location.component';
import { StepsComponent } from './steps/Components/steps/steps.component';



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
        path:'location',
        component:LocationComponent
      },
      {
        path:'workers',
        component:ChosseWorkerComponent,
      },
    
    ]
  },
  {
    path:'**',
    redirectTo: 'steps',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
