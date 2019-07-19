import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:[any] = [
    {
      titulo: "Principal",
      icono: "mdi mdi-gauge",
      submenu:[
        {titulo:"Dashbord", url:"/dashboard"},
        {titulo:"Progress bar", url:"/progress"},
        {titulo:"Graficas", url:"/grafica1"},
        {titulo:"Promesas", url:"/promesa"},
        {titulo:"rxjs", url:"/rxjs"}
      ]
    }
  ]
  
  constructor() { }
}
