import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  asistente: Asistente;
  asistentes: Array<Asistente>;


  constructor() { 
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
  }

  ngOnInit(): void {
  }
  
  constancia(evento){
    this.asistente.requiereConstancia=evento.target.checked;
  }
  
  public guardarAsistente(){
    this.asistente.fecha=new Date();
    this.asistentes.push(this.asistente);
    this.asistente = new Asistente();
  }
  
}
