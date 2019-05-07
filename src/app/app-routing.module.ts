import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { Error404Component } from './error404/error404.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {path:'progress',component:ProgressComponent},
      {path:'grafica1',component:Grafica1Component},
      {path:'dashboard',component:DashboardComponent},
      {path:'',redirectTo:'/dashboard',pathMatch:"full"},
    ]
  },
  
  {path:'login',component:LoginComponent},
  {path:'registe',component:RegisterComponent},
  
  
  {path:'**',component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
