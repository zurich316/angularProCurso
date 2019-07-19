import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subsription:Subscription;
  contador:number = 0;
  constructor() { 

    
    this.subsription = this.regrsarObs().pipe(
      retry(2)
    )  
    .subscribe(
      numero=>console.log("Numero RXJS: ", numero),
      error=>console.error("Error: ",error),
      ()=>console.log("Termino")
    )

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }


  regrsarObs():Observable<any >{
   return new Observable(observer=>{
      let intervalo = setInterval(()=>{

        const objeto={
          valor:this.contador
        }

        this.contador++
        observer.next(objeto);

        // if(this.contador==5){
        //   clearInterval(intervalo)
        //   observer.complete();
        // }

        // if(this.contador==2){
        //   console.log("ERROR")
        //   clearInterval(intervalo)
        //   observer.error("Auxilio");
        // }

      },1000);
    }).pipe(

      map((resp:any)=>{
        return resp.valor+1; 
      }),
      filter((valor,index)=>{
       
        if ((valor%2)===1) {
          return true
        } else {
          return false
        }
      })
    )

  }

}
