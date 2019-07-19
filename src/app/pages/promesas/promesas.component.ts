import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  contador:number=0;
  constructor() { 

    
    this.contarTres().then((numero:any)=>{

      console.log("Numero:",numero);
    }).catch(error=>console.error("Error: "+error))

  }

  ngOnInit() {
  }


  contarTres():Promise<boolean>{
    return new Promise((resolve,reject)=>{

      let intervalo = setInterval(()=>{

        this.contador++;
        console.log(this.contador);
        if(this.contador==3){
          resolve(true);
          //reject("ERROR X")
          clearInterval(intervalo);
        }

      },1000)

    });
  }

}
