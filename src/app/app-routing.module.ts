import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Error404Component } from './share/error404/error404.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'registe',component:RegisterComponent}, 
  {path:'**',component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
