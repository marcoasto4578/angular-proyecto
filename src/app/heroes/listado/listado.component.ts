import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado:string="";
  arreglo:string[]=[];
  heroes:string[]=["Goku","Ironman","Optimus","papa cerdito"]
  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift()||""
  }


 
}
