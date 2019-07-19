import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccontSettingComponent } from './accont-setting/accont-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {path:'progress',component:ProgressComponent,data: { title: 'Progreso' }},
      {path:'grafica1',component:Grafica1Component,data: { title: 'Graficas' }},
      {path:'dashboard',component:DashboardComponent,data: { title: 'Principal' }},
      {path:'acount-settings',component:AccontSettingComponent,data: { title: 'Configuraciones' }},
      {path:'promesa',component:PromesasComponent,data: { title: 'Promesas' }},
      {path:'rxjs',component:RxjsComponent,data: { title: 'RXJS' }},
      {path:'',redirectTo:'/dashboard',pathMatch:"full"},
    ]
  }
];

export const PAGES_ROUTER = RouterModule.forChild( pagesRoutes);