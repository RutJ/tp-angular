import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { GestionPalabraService } from 'src/app/services/gestion-palabra.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z'];
  cantidadVidas:number=6;
  puntaje:number=0;
  palabras:Array<Palabra>;
  palabra:Palabra;
  letras:Array<string>;
  encontrado:boolean=false;
  pal:Palabra;
  letraObtenida:string="";
  posiciones:Array<boolean>;
  mostrar=false;
  palabraIngresada:Palabra;
  posicionPalabra=0;
  letrasIngresadas:Array<string>;
  letraIngresada:string;
  band=false;
  compararM=false;
  maxPosicion:number;
  mostrarFelicitacion=false;

  constructor(private palabraService:GestionPalabraService) {
    this.palabraIngresada= new Palabra();
    this.palabra= new Palabra();
    this.palabras= new Array<Palabra>();
    this.listaPalabras();
    this.letras= new Array<string>();
    this.pal= new Palabra();
    this.posiciones= new Array<boolean>();
    this.letrasIngresadas= new Array<string>();
   }

  ngOnInit(): void {
  }
  
  public listaPalabras(){
    this.palabras=this.palabraService.listaPalabras();
  }
  
  public seleccionarPalabra(){
      for (let i = 0; i < this.palabras.length && this.encontrado==false; i++) {
        const element = this.palabras[i];
        if(element.categoria==this.pal.categoria){
          this.encontrado=true;
          this.posicionPalabra=i;
          this.maxPosicion=i+2;
          this.generarCampos(this.posicionPalabra);
        }
      }
  }
public generarCampos(posicion:number){
  this.palabra=this.palabras[posicion];
  for (let i = 0; i < this.palabra.palabraIngles.length; i++) {
    const element = this.palabra.palabraIngles[i];
    this.letras.push(element);
    this.posiciones.push(true);
  }
  this.compararM=true;
}
public seleccion(){
  this.band=true
}
public selecionarBoton(letra:string){
  if(this.band==true)
  this.letraObtenida=letra;
}
public iniciarJuego(){
  this.mostrar=true;
}

public compararPalabra(){
  var contador=0;
  for (let i = 0; i < this.letras.length; i++) {
    const element = this.letras[i];
    if(element==this.letrasIngresadas[i])
    contador++;
  }
  if (contador==this.letras.length) {
    this.puntaje=this.puntaje+10;
    this.posicionPalabra++;
    this.palabra=new Palabra();
    this.letras= new Array<string>();
    this.posiciones= new Array<boolean>();
    this.letrasIngresadas= new Array<string>();
    this.compararM=false;
    if (this.posicionPalabra<3) {
      this.generarCampos(this.posicionPalabra);
    }
    
  }
  if (contador<this.letras.length) {
    this.cantidadVidas--;
    this.letrasIngresadas= new Array<string>();
    
  }
  if (this.posicionPalabra>this.maxPosicion) {
    this.mostrarFelicitacion=true;
  }
  
}
  
}
