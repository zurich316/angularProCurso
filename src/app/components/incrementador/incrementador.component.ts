import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
 
  @ViewChild('txtProgresor') txtProgresor:any = ElementRef;

  @Input() progreso:number = 50;
  @Input() leyenda:string = "Leyenda";

  @Output() cambiarValor: EventEmitter<number> = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  onChange(newValue:number){

    // let elementHtml:any = document.getElementsByName('progreso')[0]
    // console.log('elem',elementHtml.value);

    console.log(this.txtProgresor.nativeElement.value);

    if (newValue>=100) {
      this.progreso = 100;
    } else if(newValue<=0) {
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    // elementHtml.value = this.progreso;
    this.txtProgresor.nativeElement.value = this.progreso;
    this.cambiarValor.emit(this.progreso);
  }

  agregarValor(valor){
    if(this.progreso + valor >100){
      this.progreso=100;
      this.cambiarValor.emit(this.progreso);
      return
    }

    if(this.progreso + valor <0){
      this.progreso=0;
      this.cambiarValor.emit(this.progreso);
      return
    }


    this.progreso = this.progreso + valor;
    this.cambiarValor.emit(this.progreso);

    this.txtProgresor.nativeElement.focus();
  }

}
