import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts-x';;

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { GraficaComponent } from './../components/grafica/grafica.component';

import { ShareModule } from '../share/share.module';

import { PAGES_ROUTER } from './pages.routes';
import { FormsModule } from '@angular/forms';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccontSettingComponent } from './accont-setting/accont-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaComponent,
    AccontSettingComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaComponent,
    AccontSettingComponent
  ],
  imports: [
   
    ShareModule,
    PAGES_ROUTER,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule { }
