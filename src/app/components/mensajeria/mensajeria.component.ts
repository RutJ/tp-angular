import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  mensaje:Mensaje;
  tamMaxText:number = 120;
  tamTexto:number=120;
  mensajes:Array<Mensaje>;
  auxText:string;
  auxDestino:number;
  auxFecha:Date;

  constructor() {
    this.mensaje=new Mensaje();
    this.mensajes= new Array<Mensaje>();
   }

  ngOnInit(): void {
  }
  public cambiarTamText(){
    this.tamTexto= this.tamMaxText-this.mensaje.texto.length;
  }
  public enviarMensaje(){
    this.auxDestino=this.mensaje.para;
    this.auxText=this.mensaje.texto;
    this.mensaje.fechaEnvio = new Date();
    this.mensajes.push(this.mensaje);
    this.mensaje=new Mensaje();
    this.auxFecha=new Date();
    this.tamTexto=120;
  }
  
  public limpiarMensaje(){
    this.tamTexto=120;
    this.mensaje= new Mensaje();
    
  }
}
