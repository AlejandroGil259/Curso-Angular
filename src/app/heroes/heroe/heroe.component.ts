import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'IronMan';
  edad: number = 21;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase(); 
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe():void{
     this.nombre ='Batman';
  }

  cambiarEdad():void{
    this.edad = 11;
 }
}