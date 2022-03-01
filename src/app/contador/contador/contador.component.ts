import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent{
  title:string="Contador App"
  numero:number=0;
  base:number=2;
  acumular(valor:number){
    this.numero+=valor
  }  
}
