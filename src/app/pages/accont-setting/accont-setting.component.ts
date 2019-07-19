import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/service/settings/settings.service';

@Component({
  selector: 'app-accont-setting',
  templateUrl: './accont-setting.component.html',
  styles: []
})
export class AccontSettingComponent implements OnInit {

  constructor(public _ajustes:SettingsService ) { }

  ngOnInit() {
    this.colocarCheck()
  }

  cambiarColor(tema,link){

    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link:any){

    let selectores:any = document.getElementsByClassName('selector')
    for(let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema:any = this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if (ref.getAttribute('data-theme')===tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
