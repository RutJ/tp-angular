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
  constructor(private palabraService:GestionPalabraService) {
    this.palabra= new Palabra();
    this.palabras= new Array<Palabra>();
    this.listaPalabras();
    this.letras= new Array<string>();
    this.pal= new Palabra();
    this.posiciones= new Array<boolean>();
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
          this.palabra= element;
          this.encontrado=true;
          this.generarCampos();
        }
      }
      
  }
public generarCampos(){
  this.palabra
  for (let i = 0; i < this.palabra.palabraIngles.length; i++) {
    const element = this.palabra.palabraIngles[i];
    this.letras.push(element);
    this.posiciones.push(false);
  }
}

public selecionarBoton(letra:string){
  this.letraObtenida=letra;
}


  
}
