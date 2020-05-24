import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class GestionPalabraService {
  animal1 = new Palabra(1,"CAT","gato","-----");
  animal2 = new Palabra(1,"DOG","perro","-----");
  animal3 = new Palabra(1,"LION","leon","-----");
  navidad1 = new Palabra(2,"TREE","arbol","-----");
  navidad2 = new Palabra(2,"GIFT","regalo","-----");
  navidad3 = new Palabra(2,"STAR","estrella","-----");
  utiles1 = new Palabra(3,"PEN","lapiz","-----");
  utiles2 = new Palabra(3,"ERASER","borrador","-----");
  utiles3 = new Palabra(3,"BACKPACK","mochila","-----");
  palabras = [this.animal1,this.animal2,this.animal3,this.navidad1,this.navidad2,this.navidad3,this.utiles1,this.utiles2,this.utiles3];
  constructor() {}

  public listaPalabras(){
    return this.palabras;
  }

}
