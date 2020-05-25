import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class GestionPalabraService {
  animal1 = new Palabra(1,"CAT","gato","assets/images/gato.jpg");
  animal2 = new Palabra(1,"DOG","perro","assets/images/perro.jpg");
  animal3 = new Palabra(1,"LION","leon","assets/images/leon.jpg");
  navidad1 = new Palabra(2,"TREE","arbol","assets/images/arbol.jpg");
  navidad2 = new Palabra(2,"GIFT","regalo","assets/images/regalo.jpg");
  navidad3 = new Palabra(2,"STAR","estrella","assets/images/estrella.jpg");
  utiles1 = new Palabra(3,"PEN","lapiz","assets/images/lapiz.jpg");
  utiles2 = new Palabra(3,"ERASER","borrador","assets/images/borrador.jpg");
  utiles3 = new Palabra(3,"BACKPACK","mochila","assets/images/mochila.jpg");
  palabras = [this.animal1,this.animal2,this.animal3,this.navidad1,this.navidad2,this.navidad3,this.utiles1,this.utiles2,this.utiles3];
  constructor() {}

  public listaPalabras(){
    return this.palabras;
  }

}
